import React, { useMemo } from 'react';
import { Chip, Typography, Tooltip } from '@material-ui/core';
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
            <Tooltip title={tag.label} key={tag.label}>
              <Chip className={classes.label} label={`#${tag.label}`} />
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
