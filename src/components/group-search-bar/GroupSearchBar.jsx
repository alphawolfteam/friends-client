import React from 'react';
import { InputBase, Fab, Divider } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './GroupSearchBar.styles';

const ENTER_CHAR_CODE = 13;

const GroupSearchBar = ({ searchValue, setSearchValue, onSearch }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE) {
      onSearch(event.target.value);
    }
  };

  const handleOnClick = () => {
    onSearch(searchValue);
  };

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.length % 2 === 0) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <Fab className={classes.searchIcon} onClick={() => handleOnClick()}>
        <Search />
        <Divider className={classes.divider} orientation="vertical" flexItem />
      </Fab>
      <InputBase
        id="searchInput"
        placeholder={t('placeholder.search')}
        value={searchValue}
        onKeyDown={(e) => handleOnKeyPress(e)}
        onChange={(e) => handleOnChange(e)}
        className={classes.input}
      />
    </div>
  );
};

export default GroupSearchBar;
