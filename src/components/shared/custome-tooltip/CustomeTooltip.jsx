import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import useStyles from './CustomeTooltip.styles';

const CustomeTooltip = ({ title, element }) => {
  const classes = useStyles();

  return (
    <Tooltip
      className={classes.root}
      title={<Typography className={classes.title}>{title}</Typography>}
      arrow
    >
      {element}
    </Tooltip>
  );
};

export default CustomeTooltip;
