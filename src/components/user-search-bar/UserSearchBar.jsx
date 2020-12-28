import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './UserSearchBar.styles';
import UsersService from '../../services/UsersService';
import Autocomplete from '../autocomplete/Autocomplete';

const UserSearchBar = ({ setSelectedUser }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (searchValue.length < 2) {
      setOptions([]);
    } else {
      setOptions(await UsersService.searchUsers(searchValue));
    }
  }, [searchValue]);

  const handleOnChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  return (
    <div className={classes.root}>
      <InputBase
        id="searchInput"
        placeholder={t('placeholder.friends')}
        dir="rtl"
        value={searchValue}
        onChange={(e) => handleOnChange(e)}
        className={classes.searchBar}
      />
      <Autocomplete
        options={options}
        setSelectedOption={(selectedOption) => {
          setSelectedUser(selectedOption);
          setSearchValue('');
        }}
      />
    </div>
  );
};
export default UserSearchBar;
