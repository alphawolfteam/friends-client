import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import Scrollbar from 'react-scrollbars-custom';
import GroupsList from '../groups-list/GroupsList';
import TextDivider from '../text-divider/TextDivider';
import useStyles from './ScrollableGroupsResult.styles';

const ScrollableGroupsResult = ({ privateGroups, publicGroups }) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {privateGroups.length > 0 || publicGroups.length > 0 ? (
            <>
              {privateGroups.length > 0 && (
                <>
                  <TextDivider text="הקבוצות שלי" />
                  <GroupsList groups={privateGroups} />
                </>
              )}
              {publicGroups.length > 0 && (
                <>
                  <TextDivider text="קבוצות ציבוריות" />
                  <GroupsList groups={publicGroups} />
                </>
              )}
            </>
          ) : (
            <Typography className={classes.message}>
              לא נמצאו אף קבוצות
            </Typography>
          )}
        </div>
      </Scrollbar>
    </Paper>
  );
};

export default ScrollableGroupsResult;
