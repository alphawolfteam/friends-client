import React,
{
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Button, Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import userContext from '../../stores/userStore';
import useStyles from './GroupsSearch.style';
import GroupsService from '../../services/GroupsService';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import ScrollableGroupsResult from '../../components/scrollable-groups-result/ScrollableGroupsResult';
import AddGroupDialog from '../../components/add-group-dialog/AddGroupDialog';
import config from '../../appConf';

const { getRole } = config;

const getSortedPrivateGroups = (privateGroups, userId) => {
  const ownedGroups = [];
  const unownedGroups = [];
  privateGroups.forEach((group) => {
    if (GroupsService.getUserRoleCode(group, userId) === getRole('manager').code) {
      ownedGroups.push(group);
    } else {
      unownedGroups.push(group);
    }
  });

  return [...ownedGroups, ...unownedGroups];
};

const GroupsSearch = () => {
  const classes = useStyles();
  const [filteredPrivateGroups, setFilteredPrivateGroups] = useState([]);
  const [filteredPublicGroups, setFilteredPublicGroups] = useState([]);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const currentUser = useContext(userContext);

  useEffect(async () => {
    setFilteredPrivateGroups(await GroupsService.getPrivateGroups(currentUser.id));
  }, []);

  const handleOnSearch = async (searchValue) => {
    setFilteredPrivateGroups(
      await GroupsService.searchPrivateGroups(currentUser.id, searchValue),
    );
    if (searchValue.length <= 2) {
      setFilteredPublicGroups([]);
    } else {
      setFilteredPublicGroups(await GroupsService.searchPublicGroups(searchValue));
    }
  };

  const sortedPrivateGroups = useMemo(() => (
    getSortedPrivateGroups(filteredPrivateGroups, currentUser.id)),
  [filteredPrivateGroups, currentUser]);

  // TODO: Delete
  const handleRefresh = async () => {
    setFilteredPrivateGroups(await GroupsService.getPrivateGroups(currentUser.id));
    setFilteredPublicGroups([]);
  };

  return (
    <div className={classes.root}>
      <GroupSearchBar onSearch={(searchValue) => handleOnSearch(searchValue)} />
      <Button onClick={() => handleRefresh()}>refresh</Button>
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
