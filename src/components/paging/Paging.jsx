import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './Paging.styles';

const Paging = ({ pages }) => {
  const classes = useStyles();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const changePage = (direction) => {
    if (direction === 'next') {
      setCurrentPageIndex((prevPage) => prevPage + 1);
    } else if (direction === 'back') {
      setCurrentPageIndex((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        <div className={classes.buttonSection}>
          {pages.length - 1 > currentPageIndex
        && <Button onClick={() => changePage('next')} className={classes.button}>רשימת חברים</Button>}
        </div>
        <div className={classes.buttonSection}>
          {currentPageIndex > 0
        && <Button onClick={() => changePage('back')} className={classes.button}>חזור</Button>}
        </div>
      </div>
      <div className={classes.page}>{pages[currentPageIndex]}</div>
    </div>
  );
};

export default Paging;
