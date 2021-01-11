import React from 'react';
import { Chip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './DeletableTag.styles';

const DeletableTag = ({ tag, onRemove }) => {
  const classes = useStyles();

  return (
    <CustomeTooltip
      title={tag}
      className={classes.root}
      element={(
        <Chip
          className={classes.label}
          label={`#${tag}`}
          onDelete={onRemove}
          deleteIcon={<Close className={classes.closeIcon} />}
        />
      )}
    />
  );
};

export default DeletableTag;
