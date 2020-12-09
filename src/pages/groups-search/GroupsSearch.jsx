import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {
  privateGroupsContext,
  publicGroupsContext,
} from '../../stores/groupsStore';
import { userContext } from '../../stores/userStore';
import useStyles from './GroupsSearch.style';
import loadingAnimation from '../../images/loading.gif';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import config from '../../appConf';
import ScrollableGroupsResult from '../../components/scrollable-groups-result/ScrollableGroupsResult';

const { rolesEnum } = config;

const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
    || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

const getFilteredGroups = (groups, searchValue) => groups.filter(
  (privateGroup) => isIncludesInSentence(privateGroup.name, searchValue)
      || privateGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue))
        .length > 0,
);

const getSortedPrivateGroups = (privateGroups, user) => {
  const ownedGroups = [];
  const unownedGroups = [];
  privateGroups.forEach((group) => {
    let owned = false;
    owned = group.users.forEach((groupUser) => {
      if (user.id === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
        return true;
      }
      return false;
    });
    if (owned) {
      ownedGroups.push(group);
    } else {
      unownedGroups.push(group);
    }
  });

  return [...ownedGroups, ...unownedGroups];
};

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  console.log(openAddGroupDialog);
  const user = useContext(userContext);
  const privateGroups = useContext(privateGroupsContext);
  const publicGroups = useContext(publicGroupsContext);

  useEffect(() => {
    setIsLoading(privateGroups === undefined);
  }, [privateGroups]);

  const renderLoading = () => (
    <div className={classes.loading}>
      <img src={loadingAnimation} alt="loading" />
    </div>
  );

  const filteredPrivateGroups = useMemo(
    () => (searchValue !== ''
      ? getFilteredGroups(privateGroups, searchValue)
      : privateGroups),
    [privateGroups, searchValue],
  );

  const filteredPublicGroups = useMemo(
    () => (searchValue !== '' ? getFilteredGroups(publicGroups, searchValue) : []),
    [publicGroups, searchValue],
  );

  const sortedPrivateGroups = useMemo(
    () => getSortedPrivateGroups(filteredPrivateGroups, user),
    [filteredPrivateGroups, user],
  );

  return (
    <>
      {isLoading ? (
        renderLoading()
      ) : (
        <div className={classes.root}>
          <GroupSearchBar setSearchValue={setSearchValue} />
          <ScrollableGroupsResult
            privateGroups={sortedPrivateGroups}
            publicGroups={filteredPublicGroups}
          />
          <Tooltip title="הוסף קבוצה חדשה">
            <Fab
              className={classes.addButton}
              onClick={() => setOpenAddGroupDialog(true)}
            >
              <Add />
            </Fab>
          </Tooltip>
        </div>
      )}
    </>
  );
};

export default GroupsSearch;
