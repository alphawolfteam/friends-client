import React from 'react';
import { InputBase, Fab } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './GroupSearchBar.styles';

const ENTER_CHAR_CODE = 13;

const GroupSearchBar = ({ setSearchValue }) => {
  const classes = useStyles();

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE) {
      setSearchValue(() => event.target.value);
    }
  };

  const handleOnClick = () => {
    const searchInput = document.getElementById('searchInput');
    setSearchValue(() => searchInput.value);
  };

  return (
    <div className={classes.root}>
      <Fab className={classes.searchIcon} onClick={() => handleOnClick()}>
        <Search />
      </Fab>
      <InputBase
        id="searchInput"
        placeholder="חיפוש..."
        dir="rtl"
        onKeyDown={(e) => handleOnKeyPress(e)}
        className={classes.input}
      />
    </div>
  );
};

export default GroupSearchBar;
