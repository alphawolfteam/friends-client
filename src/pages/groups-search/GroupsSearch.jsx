import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import userContext from '../../stores/userStore';
import useStyles from './GroupsSearch.style';
import GroupsService from '../../services/GroupsService';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import ScrollableGroupsResult from '../../components/scrollable-groups-result/ScrollableGroupsResult';
import AddGroupDialog from '../../components/add-group-dialog/AddGroupDialog';

const getSortedPrivateGroups = (privateGroups, userId) => {
  const ownedGroups = [];
  const unownedGroups = [];
  privateGroups.forEach((group) => {
    if (GroupsService.isAManager(group, userId)) {
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
  const [filteredPrivateGroups, setFilteredPrivateGroups] = useState([]);
  const [filteredPublicGroups, setFilteredPublicGroups] = useState([]);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const currentUser = useContext(userContext);

  useEffect(async () => {
    if (searchValue === '') {
      setFilteredPrivateGroups(await GroupsService.getPrivateGroups());
      setFilteredPublicGroups([]);
    } else {
      setFilteredPrivateGroups(await GroupsService.getFilteredPrivateGroups(searchValue));
      if (searchValue.length >= 2) {
        setFilteredPublicGroups(await GroupsService.getFilteredPublicGroups(searchValue));
      } else {
        setFilteredPublicGroups([]);
      }
    }
  }, [searchValue]);

  const sortedPrivateGroups = useMemo(() => (
    getSortedPrivateGroups(filteredPrivateGroups, currentUser.id)),
  [filteredPrivateGroups, currentUser]);

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
          <Add className={classes.icon} />
        </Fab>
      </Tooltip>
      {openAddGroupDialog && (
        <AddGroupDialog
          open={openAddGroupDialog}
          onClose={() => setOpenAddGroupDialog(false)}
        />
      )}
    </div>
  );
};

export default GroupsSearch;
