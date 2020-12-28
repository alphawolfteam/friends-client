import React from 'react';
import { Chip, Tooltip } from '@material-ui/core';
import useStyles from './TagsList.styles';

const TagsList = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tags.length > 0 && (
        <div className={classes.tagsList}>
          {tags.map((tag) => (
            <Tooltip title={tag} key={tag}>
              <Chip dir="rtl" className={classes.label} label={`#${tag}`} />
            </Tooltip>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagsList;
