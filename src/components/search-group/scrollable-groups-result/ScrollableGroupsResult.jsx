import React, { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined';
import { useTranslation } from 'react-i18next';
import GroupsList from '../groups-list/GroupsList';
import GroupsLoader from '../groups-loader/GroupsLoader';
import TextDivider from '../text-divider/TextDivider';
import useStyles from './ScrollableGroupsResult.styles';

const ScrollableGroupsResult = ({
  currentUserGroups,
  setCurrentUserGroups,
  privateGroups,
  setPrivateGroups,
  publicGroups,
  setPublicGroups,
  searchValue,
  setOpenAddGroupDialog,
  isLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(false);
  let timeout;

  useEffect(() => () => clearTimeout(timeout));

  const noGroupsFound = (
    <Typography className={classes.message}>
      {t('message.noGroupsFound')}
    </Typography>
  );

  const noCurrentUserGroupsFound = (
    <div className={classes.startMessage}>
      {t('message.noCurrentUserGroupsFound')}
      <GroupAddOutlined
        className={classes.button}
        onClick={() => setOpenAddGroupDialog(true)}
      />
    </div>
  );

  const currentUserGroupsList = (
    <>
      <TextDivider text={t('title.currentUserGroups')} />
      <GroupsList
        groups={currentUserGroups}
        setGroups={setCurrentUserGroups}
        searchValue={searchValue}
      />
    </>
  );

  const privateGroupsList = (
    <>
      <TextDivider text={t('title.privateGroups')} />
      <GroupsList
        groups={privateGroups}
        setGroups={setPrivateGroups}
        searchValue={searchValue}
      />
    </>
  );

  const publicGroupsList = (
    <>
      <TextDivider text={t('title.publicGroups')} />
      <GroupsList
        groups={publicGroups}
        setGroups={setPublicGroups}
        searchValue={searchValue}
      />
    </>
  );

  const renderGroupsList = () => {
    if (privateGroups?.length === 0 && publicGroups?.length === 0) {
      return noGroupsFound;
    }

    if (currentUserGroups?.length === 0) {
      return noCurrentUserGroupsFound;
    }

    return (
      <Fade in>
        <div className={classes.wrap}>
          {currentUserGroups?.length > 0 && currentUserGroupsList}
          {privateGroups?.length > 0 && privateGroupsList}
          {publicGroups?.length > 0 && publicGroupsList}
        </div>
      </Fade>
    );
  };

  const renderContent = () => {
    timeout = setTimeout(() => {
      setShowLoader(isLoading);
    }, 1000);

    return <>{showLoader ? <GroupsLoader /> : renderGroupsList()}</>;
  };

  return (
    <div className={classes.root}>
      <div className={classes.scrollBarContent}>{renderContent()}</div>
    </div>
  );
};

export default ScrollableGroupsResult;
