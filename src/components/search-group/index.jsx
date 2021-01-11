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
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import useStyles from './index.style';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import { getSortedGroupsByRole, getSortedGroupsByType } from '../../utils/sharedFunctions';
import GroupSearchBar from '../group-search-bar/GroupSearchBar';
import ScrollableGroupsResult from
  '../scrollable-groups-result/ScrollableGroupsResult';
import AddGroupDialog from '../add-group/index';
import config from '../../appConf';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';

const GroupsSearch = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [currentUserGroups, setCurrentUserGroups] = useState(undefined);
  const [filteredPrivateGroups, setFilteredPrivateGroups] = useState(undefined);
  const [filteredPublicGroups, setFilteredPublicGroups] = useState(undefined);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const currentUser = useContext(userContext);

  const handleInit = useCallback(() => {
    setIsLoading(true);
    GroupsService.getUserGroups(currentUser.genesisId)
      .then((res) => {
        setCurrentUserGroups(res);
        setFilteredPrivateGroups(undefined);
        setFilteredPublicGroups(undefined);
        setSearchValue('');
        setIsLoading(false);
      })
      .catch(() => enqueueSnackbar(
        <CustomeSnackbarContent message={t('error.server')} />,
        { variant: 'error' },
      ));
  }, []);

  useEffect(async () => {
    handleInit();
  }, []);

  const handleOnSearch = useCallback((value) => {
    if (value.length < config.length_limitations.min_group_name_length) {
      handleInit();
    } else {
      setIsLoading(true);
      Promise.all([
        GroupsService.searchPrivateGroups(value),
        GroupsService.searchPublicGroups(value),
      ])
        .then((results) => {
          setCurrentUserGroups(undefined);
          setFilteredPrivateGroups(results[0]);
          setFilteredPublicGroups(results[1]);
          setIsLoading(false);
        })
        .catch(() => enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        ));
    }
  }, []);

  const sortedCurrentUserGroups = useMemo(() => {
    if (currentUserGroups) {
      return getSortedGroupsByRole(
        getSortedGroupsByType(currentUserGroups),
        currentUser.genesisId,
      );
    }
  }, [currentUserGroups, currentUser]);

  const sortedPrivateGroups = useMemo(() => {
    if (filteredPrivateGroups) {
      return getSortedGroupsByRole(filteredPrivateGroups, currentUser.genesisId);
    }
  }, [filteredPrivateGroups, currentUser]);

  const sortedPublicGroups = useMemo(() => {
    if (filteredPublicGroups) {
      return getSortedGroupsByRole(filteredPublicGroups, currentUser.genesisId);
    }
  }, [filteredPublicGroups, currentUser]);

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
          currentUserGroups={sortedCurrentUserGroups}
          privateGroups={sortedPrivateGroups}
          publicGroups={sortedPublicGroups}
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
