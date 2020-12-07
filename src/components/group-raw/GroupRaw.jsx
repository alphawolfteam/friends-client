import React from "react";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";
import useStyles from "./GroupRaw.styles";
import LockIcon from "../lock-icon/LockIcon";

const GroupRaw = ({ group, setSelectedGroup }) => {
  const classes = useStyles();

  return (
    <Card onClick={() => setSelectedGroup(group)} className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <div className={classes.mainContent}>
          {group.icon && (
            <div className={classes.groupIcon}>
              <img className={classes.img} src={group.icon} alt="icon" />
            </div>
          )}
          <Typography className={classes.groupName}>{group.name}</Typography>
        </div>
        {group.tags.length > 0 && (
          <div>
            {group.tags.map((tag) => (
              <Chip className={classes.label} key={tag} label={`#${tag}`} />
            ))}
          </div>
        )}
        <div className={classes.info}>
          <LockIcon type={group.type} />
          <Typography className={classes.groupAmount}>
            {group.users.length} חברים
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupRaw;
