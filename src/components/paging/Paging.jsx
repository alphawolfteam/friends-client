import React, { useState } from 'react';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import Scrollbar from 'react-scrollbars-custom';
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

  const renderButtonsSection = () => (
    <div className={classes.buttonSection}>
      <NavigateBefore
        className={`${currentPageIndex < pages.length - 1
          ? classes.arrowIcon
          : classes.disabledArrowIcon}`}
        onClick={() => {
          if (currentPageIndex < pages.length - 1) {
            changePage('next');
          }
        }}
      />
      <NavigateNext
        className={`${currentPageIndex > 0
          ? classes.arrowIcon
          : classes.disabledArrowIcon}`}
        onClick={() => {
          if (currentPageIndex > 0) {
            changePage('back');
          }
        }}
      />
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <Scrollbar>
          {pages[currentPageIndex]}
        </Scrollbar>
      </div>
      {renderButtonsSection()}
    </div>
  );
};

export default Paging;
