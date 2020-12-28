import React,
{
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import useStyles from './GroupsSearch.style';
import GroupsService from '../../services/GroupsService';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import ScrollableGroupsResult from '../../components/scrollable-groups-result/ScrollableGroupsResult';
import AddGroupDialog from '../add-group-dialog/AddGroupDialog';
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
  const [searchValue, setSearchValue] = useState('');
  const currentUser = useContext(userContext);

  const handleInit = async () => {
    setFilteredPrivateGroups(await GroupsService.getPrivateGroups(currentUser.id));
    setFilteredPublicGroups([]);
    setSearchValue('');
  };

  useEffect(async () => {
    handleInit();
  }, []);

  const handleOnSearch = async (value) => {
    if (value.length === 0) {
      handleInit();
    } else {
      setFilteredPrivateGroups(
        await GroupsService.searchPrivateGroups(currentUser.id, value),
      );
      if (value.length <= 2) {
        setFilteredPublicGroups([]);
      } else {
        setFilteredPublicGroups(await GroupsService.searchPublicGroups(value));
      }
    }
  };

  const sortedPrivateGroups = useMemo(() => (
    getSortedPrivateGroups(filteredPrivateGroups, currentUser.id)),
  [filteredPrivateGroups, currentUser]);

  return (
    <div className={classes.root}>
      <GroupSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={(value) => handleOnSearch(value)}
      />
      <refreshDataContext.Provider value={() => handleInit()}>
        <ScrollableGroupsResult
          privateGroups={sortedPrivateGroups}
          publicGroups={filteredPublicGroups}
          searchValue={searchValue}
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
      </refreshDataContext.Provider>
    </div>
  );
};

export default GroupsSearch;
