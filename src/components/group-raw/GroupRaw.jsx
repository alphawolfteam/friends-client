import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./GroupRaw.styles";

const GroupRaw = ({ group }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.groupName} dir="rtl">
          {group.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GroupRaw;
