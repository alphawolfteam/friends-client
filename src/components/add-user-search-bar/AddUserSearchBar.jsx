import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './AddUserSearchBar.styles';
import UsersService from '../../services/UsersService';
import UsersAutocomplete from '../users-autocomplete/UsersAutocomplete';

const MIN_SEARCH_VALUE_LENGTH = 2;

const AddUserSearchBar = ({ setSelectedUser }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (searchValue.length < MIN_SEARCH_VALUE_LENGTH) {
      setOptions([]);
    } else {
      UsersService.searchUsers(searchValue)
        .then((res) => {
          setOptions(res);
        })
        // TODO: Error handler
        .catch((e) => console.log(e));
    }
  }, [searchValue]);

  const handleOnChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  return (
    <div className={classes.root}>
      <InputBase
        id="searchInput"
        placeholder={t('placeholder.searchFriend')}
        value={searchValue}
        onChange={(e) => handleOnChange(e)}
        className={classes.searchBar}
      />
      <UsersAutocomplete
        options={options}
        setSelectedOption={(selectedOption) => {
          setSelectedUser(selectedOption);
          setSearchValue('');
        }}
        setOptions={(value) => setOptions(value)}
      />
    </div>
  );
};
export default AddUserSearchBar;
