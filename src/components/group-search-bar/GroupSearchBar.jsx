import React, { useState } from 'react';
import { InputBase, Fab } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './GroupSearchBar.styles';

const ENTER_CHAR_CODE = 13;

const GroupSearchBar = ({ onSearch }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE) {
      onSearch(searchValue);
    }
  };

  const handleOnClick = () => {
    onSearch(searchValue);
  };

  const handleOnChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    if (newValue.length % 2 === 0) {
      onSearch(newValue);
    }
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
        value={searchValue}
        onKeyDown={(e) => handleOnKeyPress(e)}
        onChange={(e) => handleOnChange(e)}
        className={classes.input}
      />
    </div>
  );
};

export default GroupSearchBar;
