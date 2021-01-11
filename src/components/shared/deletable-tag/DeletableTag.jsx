import React, { useState } from 'react';
import { Chip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './DeletableTag.styles';
import ExistTransition from '../exist-transition/ExistTransition';

const duration = 300;

const DeletableTag = ({ tag, onRemove }) => {
  const classes = useStyles();
  const [inProp, setInProp] = useState(true);

  const tagElement = (
    <Chip
      className={classes.label}
      label={`#${tag}`}
      onDelete={() => {
        setInProp(false);
        setTimeout(() => {
          onRemove();
        }, duration);
      }}
      deleteIcon={(
        <Close className={classes.closeIcon} />
      )}
    />
  );

  return (
    <ExistTransition
      element={(
        <CustomeTooltip
          title={tag}
          className={classes.root}
          element={tagElement}
        />
      )}
      duration={duration}
      inProp={inProp}
    />
  );
};

export default DeletableTag;
