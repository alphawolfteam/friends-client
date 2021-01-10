import React from 'react';
import { Chip, Tooltip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './DeletableTag.styles';

const DeletableTag = ({ tag, onRemove }) => {
  const classes = useStyles();

  return (
    <Tooltip className={classes.root} title={tag}>
      <Chip
        className={classes.label}
        label={`#${tag}`}
        onDelete={onRemove}
        deleteIcon={<Close className={classes.closeIcon} />}
      />
    </Tooltip>
  );
};

export default DeletableTag;
