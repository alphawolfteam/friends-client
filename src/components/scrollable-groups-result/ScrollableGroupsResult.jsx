import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import Scrollbar from 'react-scrollbars-custom';
import { useTranslation } from 'react-i18next';
import GroupsList from '../groups-list/GroupsList';
import TextDivider from '../text-divider/TextDivider';
import useStyles from './ScrollableGroupsResult.styles';

const ScrollableGroupsResult = ({ privateGroups, publicGroups, searchValue }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper elevation={2} className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {privateGroups.length > 0 || publicGroups.length > 0 ? (
            <>
              {privateGroups.length > 0 && (
                <>
                  <TextDivider text={t('title.myGroups')} />
                  <GroupsList groups={privateGroups} searchValue={searchValue} />
                </>
              )}
              {publicGroups.length > 0 && (
                <>
                  <TextDivider text={t('title.publicGroups')} />
                  <GroupsList groups={publicGroups} searchValue={searchValue} />
                </>
              )}
            </>
          ) : (
            <Typography className={classes.message}>
              {t('message.noGroupsFound')}
            </Typography>
          )}
        </div>
      </Scrollbar>
    </Paper>
  );
};

export default ScrollableGroupsResult;
