import React,
{
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [filteredPrivateGroups, setFilteredPrivateGroups] = useState([]);
  const [filteredPublicGroups, setFilteredPublicGroups] = useState(undefined);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const currentUser = useContext(userContext);

  const handleInit = async () => {
  // TODO: Add loader
    setFilteredPrivateGroups(await GroupsService.getPrivateGroups(currentUser.id));
    setFilteredPublicGroups(undefined);
    setSearchValue('');
  };

  useEffect(async () => {
    handleInit();
  }, []);

  const handleOnSearch = async (value) => {
    // TODO: Add loader
    if (value.length === 0) {
      handleInit();
    } else {
      setFilteredPrivateGroups(
        await GroupsService.searchPrivateGroups(currentUser.id, value),
      );
      setFilteredPublicGroups(await GroupsService.searchPublicGroups(value));
    }
  };

  const sortedPrivateGroups = useMemo(() => (
    getSortedPrivateGroups(filteredPrivateGroups, currentUser.id)),
  [filteredPrivateGroups, currentUser]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button
          className={classes.addButton}
          onClick={() => setOpenAddGroupDialog(true)}
        >
          {t('button.addNewGroup')}
          <Add className={classes.icon} />
        </Button>
        <GroupSearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={(value) => handleOnSearch(value)}
        />
      </div>
      <refreshDataContext.Provider value={() => handleInit()}>
        <ScrollableGroupsResult
          privateGroups={sortedPrivateGroups}
          publicGroups={filteredPublicGroups}
          searchValue={searchValue}
          setOpenAddGroupDialog={(value) => setOpenAddGroupDialog(value)}
        />
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
