import React, { useMemo } from 'react';
import { Chip, Tooltip, Typography } from '@material-ui/core';
import useStyles from './TagsList.styles';

const TagsList = ({ tags, maxTagsCount }) => {
  const classes = useStyles();

  const slicedTagsList = useMemo(() => (maxTagsCount ? [...tags]
    .slice(0, maxTagsCount) : tags),
  [tags, maxTagsCount]);

  return (
    <div className={classes.root}>
      {slicedTagsList.length > 0 && (
        <div className={classes.tagsList}>
          {slicedTagsList.map((tag) => (
            <Tooltip title={tag} key={tag}>
              <Chip dir="rtl" className={classes.label} label={`#${tag}`} />
            </Tooltip>
          ))}
          {tags.length > maxTagsCount
            && <Typography className={classes.moreMessage}>...</Typography>}
        </div>
      )}
    </div>
  );
};

export default TagsList;
