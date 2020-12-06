import React from "react";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import useStyles from "./GroupRaw.styles";
import { DriveEtaRounded, Lock, LockOpen } from "@material-ui/icons";

const GroupRaw = ({ group }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <div className={classes.mainContent}>
        {group.icon && (
          <div className={classes.groupIcon}>
            <img className={classes.img} src={group.icon} alt="icon" />
          </div>
        )}
        <Typography className={classes.groupName}>{group.name}</Typography>
        </div>
        <div className={classes.info}>
        {group.type === "private" ? (
          <Lock className={classes.lock} />
        ) : (
          <LockOpen className={classes.lock} />
        )}
        <Typography className={classes.groupAmount}>{group.users.length} חברים</Typography>
          </div>
      </CardContent>
    </Card>
  );
};

export default GroupRaw;
