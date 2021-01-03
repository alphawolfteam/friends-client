import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { GroupAdd } from '@material-ui/icons';
import Scrollbar from 'react-scrollbars-custom';
import { useTranslation } from 'react-i18next';
import GroupsList from '../groups-list/GroupsList';
import TextDivider from '../text-divider/TextDivider';
import useStyles from './ScrollableGroupsResult.styles';

const ScrollableGroupsResult = ({
  privateGroups,
  publicGroups,
  searchValue,
  setOpenAddGroupDialog,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const noGroupsFound = (
    <Typography className={classes.message}>
      {t('message.noGroupsFound')}
    </Typography>
  );

  const noPrivateGroupsFound = (
    <div className={classes.startMessage}>
      {t('message.noPrivateGroupsFound')}
      <GroupAdd
        className={classes.button}
        onClick={() => setOpenAddGroupDialog(true)}
      />
    </div>
  );

  const privateGroupsList = (
    <>
      <TextDivider text={t('title.myGroups')} />
      <GroupsList groups={privateGroups} searchValue={searchValue} />
    </>
  );

  const publicGroupsList = (
    <>
      <TextDivider text={t('title.publicGroups')} />
      <GroupsList groups={publicGroups} searchValue={searchValue} />
    </>
  );

  const getGroupsList = () => {
    if (privateGroups.length === 0 && (publicGroups && publicGroups.length === 0)) {
      return noGroupsFound;
    }
    if (privateGroups.length === 0 && !publicGroups) {
      return noPrivateGroupsFound;
    }
    return (
      <>
        {privateGroups.length > 0 && (privateGroupsList)}
        {publicGroups && publicGroups.length > 0 && (publicGroupsList)}
      </>
    );
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {getGroupsList()}
        </div>
      </Scrollbar>
    </Paper>
  );
};

export default ScrollableGroupsResult;
