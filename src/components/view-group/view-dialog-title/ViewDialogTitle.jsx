import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './ViewDialogTitle.styles';
import LockIcon from '../../shared/lock-icon/LockIcon';
import CustomeTooltip from '../../shared/custome-tooltip/CustomeTooltip';

const ViewDialogTitle = ({ group }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.groupIcon}>
        <img className={classes.img} src={group.icon} alt="icon" />
      </div>
      <div className={classes.groupTitle}>
        <CustomeTooltip
          title={group.name}
          element={(
            <Typography className={classes.groupName}>
              {group.name}
            </Typography>
          )}
        />
        <Typography className={classes.groupId}>
          #
          {group._id.substr(group._id.length - 4)}
        </Typography>
        <LockIcon type={group.type} />
      </div>
    </>
  );
};

export default ViewDialogTitle;
