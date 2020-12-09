import React, { useState, useContext } from 'react';
import { InputBase } from '@material-ui/core';
import useStyles from './UserSearchBar.styles';
import { usersListContext } from '../../stores/userStore';

const UserSearchBar = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(undefined);
  const usersList = useContext(usersListContext);

  const handleOnChange = (event) => {
    setSearchValue(() => event.target.value);
    console.log(usersList);
  };

  // const handleOnClick = () => {
  //   setSelectedUser(() =>{});
  // };

  return (
    <div className={classes.root}>
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
