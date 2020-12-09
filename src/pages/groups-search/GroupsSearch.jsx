import React, {
  useContext, useMemo, useState,
} from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import userContext from '../../stores/userStore';
import useStyles from './GroupsSearch.style';
import GroupsService from '../../services/GroupsService';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import config from '../../appConf';
import ScrollableGroupsResult from '../../components/scrollable-groups-result/ScrollableGroupsResult';

const { rolesEnum } = config;

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
  const [searchValue, setSearchValue] = useState('');
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  console.log(openAddGroupDialog);
  const user = useContext(userContext);

  // TODO: fix async
  const filteredPrivateGroups = useMemo(
    () => (searchValue === ''
      ? GroupsService.getPrivateGroups()
      : GroupsService.getFilteredPrivateGroups(searchValue)),
    [searchValue],
  );

  // TODO: fix async
  const filteredPublicGroups = useMemo(
    () => (searchValue.length < 2 ? [] : GroupsService.getFilteredPublicGroups(searchValue)),
    [searchValue],
  );

  const sortedPrivateGroups = useMemo(() => (filteredPrivateGroups === undefined ? []
    : getSortedPrivateGroups(filteredPrivateGroups, user)),
  [filteredPrivateGroups, user]);

  return (
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
  );
};

export default GroupsSearch;
