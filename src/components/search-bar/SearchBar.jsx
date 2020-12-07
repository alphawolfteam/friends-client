import React from "react";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useStyles from "./SearchBar.styles";

const ENTER_CHAR_CODE = 13;

const SearchBar = ({ setSearchValue }) => {
  const classes = useStyles();

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE) {
      setSearchValue(() => event.target.value);
    }
  };

  const handleOnClick = () => {
    const searchInput = document.getElementById("searchInput");
    setSearchValue(() => searchInput.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <Search onClick={() => handleOnClick()} />
      </div>
      <InputBase
        id="searchInput"
        placeholder="חפש..."
        dir="rtl"
        onKeyDown={(e) => handleOnKeyPress(e)}
        className={classes.input}
      />
    </div>
  );
};

export default SearchBar;
