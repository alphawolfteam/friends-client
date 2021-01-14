import React from 'react';
import { Chip, CircularProgress, Tooltip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './DeletableTag.styles';

const DeletableTag = ({ tag, onRemove, isRemoveLoading }) => {
  const classes = useStyles();

  return (
    <Tooltip title={tag} className={classes.root}>
      <div className={classes.element}>
        <Chip
          className={classes.label}
          label={`#${tag}`}
          onDelete={onRemove}
          deleteIcon={(
            <Close className={classes.closeIcon} />
          )}
        />
        {isRemoveLoading && (
          <CircularProgress
            size={25}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default DeletableTag;
