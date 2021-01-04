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
import { getSortedPrivateGroups } from '../../shared/functions';
import GroupSearchBar from '../../components/group-search-bar/GroupSearchBar';
import ScrollableGroupsResult from
  '../../components/scrollable-groups-result/ScrollableGroupsResult';
import AddGroupDialog from '../add-group-dialog/AddGroupDialog';

const MIN_SEARCH_VALUE_LENGTH = 2;

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
    if (value.length < MIN_SEARCH_VALUE_LENGTH) {
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

  const renderHeader = () => (
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
  );

  return (
    <div className={classes.root}>
      {renderHeader()}
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
