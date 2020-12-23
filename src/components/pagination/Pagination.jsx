import React from 'react';
import useStyles from './Pagination.styles';

const Pagination = ({ count, page }) => {
  const classes = useStyles();

  const getCircles = (circleAmount) => {
    const circles = [];
    for (let index = circleAmount; index > 0; index -= 1) {
      circles.push(
        <span key={index} className={`${classes.circle} ${page === index ? classes.selected : ''}`} />,
      );
    }
    return circles;
  };

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {getCircles(count).map((circle) => circle)}
      </div>
    </div>
  );
};

export default Pagination;
