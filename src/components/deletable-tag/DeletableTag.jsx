import React from 'react';
import { Chip, Tooltip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './DeletableTag.styles';

const DeletableTag = ({ tag, onDelete }) => {
  const classes = useStyles();

  return (
    <Tooltip className={classes.root} title={tag}>
      <Chip
        dir="rtl"
        className={classes.label}
        label={`#${tag}`}
        onDelete={onDelete}
        deleteIcon={<Close className={classes.closeIcon} />}
      />
    </Tooltip>
  );
};

export default DeletableTag;
