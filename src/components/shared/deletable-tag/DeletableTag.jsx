import React from 'react';
import { Chip, CircularProgress } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './DeletableTag.styles';

const DeletableTag = ({ tag, onRemove, isRemoveLoading }) => {
  const classes = useStyles();

  return (
    <CustomeTooltip
      title={tag}
      className={classes.root}
      element={(
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
      )}
    />
  );
};

export default DeletableTag;
