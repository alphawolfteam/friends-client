import React, { useMemo } from 'react';
import { Chip, Typography } from '@material-ui/core';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
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
            <CustomeTooltip
              title={tag.label}
              key={tag.label}
              element={(
                <Chip className={classes.label} label={`#${tag.label}`} />
              )}
            />
          ))}
          {tags.length > maxTagsCount
            && <Typography className={classes.moreMessage}>...</Typography>}
        </div>
      )}
    </div>
  );
};

export default TagsList;
