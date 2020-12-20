import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './GroupRaw.styles';
import LockIcon from '../lock-icon/LockIcon';
import TagsList from '../tags-list/TagsList';

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
        <TagsList tags={group.tags} />
        <div className={classes.info}>
          <LockIcon type={group.type} />
          <Typography className={classes.groupAmount}>
            {group.users.length}
            {' '}
            חברים
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupRaw;
