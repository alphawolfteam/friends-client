import React,
{
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
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
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const currentUser = useContext(userContext);

  const handleInit = useCallback(() => {
    setIsLoading(true);
    GroupsService.getUserGroups(currentUser.genesisId)
      .then((res) => {
        setFilteredPrivateGroups(res);
        setFilteredPublicGroups(undefined);
        setSearchValue('');
        setIsLoading(false);
      })
      // TODO: Error handler
      .catch((e) => console.log(e));
  }, []);

  useEffect(async () => {
    handleInit();
  }, []);

  const handleOnSearch = useCallback((value) => {
    if (value.length < MIN_SEARCH_VALUE_LENGTH) {
      handleInit();
    } else {
      setIsLoading(true);
      Promise.all([
        GroupsService.searchPrivateGroups(currentUser.genesisId, value),
        GroupsService.searchPublicGroups(value),
      ])
        .then((results) => {
          setFilteredPrivateGroups(results[0]);
          setFilteredPublicGroups(results[1]);
          setIsLoading(false);
        })
        // TODO: Error handler
        .catch((error) => console.log(`Error in promises ${error}`));
    }
  }, []);

  const sortedPrivateGroups = useMemo(() => (
    getSortedPrivateGroups(filteredPrivateGroups, currentUser.genesisId)),
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
          isLoading={isLoading}
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
