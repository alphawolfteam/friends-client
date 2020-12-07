import React from "react";
import GroupsList from "../../components/groups-list/GroupsList";
import TextDivider from "../../components/text-divider/TextDivider";
import { Typography } from "@material-ui/core";
import Scrollbar from "react-scrollbars-custom";
import useStyles from "./ScrollableGroupsResult.styles";

const ScrollableGroupsResult = ({ privateGroups, publicGroups }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default ScrollableGroupsResult;
