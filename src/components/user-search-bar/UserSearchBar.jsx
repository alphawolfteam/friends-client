import React, { useState, useContext } from "react";
import { InputBase, Fab } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import useStyles from "./UserSearchBar.styles";
import { usersListContext } from "../../stores/userStore";

const UserSearchBar = ({ setSelectedUser }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(undefined);
  const usersList = useContext(usersListContext);

  const handleOnChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  return (
    <div className={classes.root}>
      <Fab className={classes.searchIcon}>
        <PersonAdd />
      </Fab>
      <InputBase
        id="searchInput"
        placeholder="הוספת חבר..."
        dir="rtl"
        value={searchValue}
        onChange={(e) => handleOnChange(e)}
        className={classes.input}
      />
    </div>
  );
};

export default UserSearchBar;
