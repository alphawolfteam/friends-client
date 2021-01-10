import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './AddUserSearchBar.styles';
// import UsersService from '../../services/UsersService';
import UsersService from '../../services/Mock/MockUsersService';
import UsersAutocomplete from '../users-autocomplete/UsersAutocomplete';
import config from '../../appConf';

const AddUserSearchBar = ({ setSelectedUser }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (searchValue.length < config.minUserSearchValue) {
      setOptions([]);
    } else {
      UsersService.searchUsers(searchValue)
        .then((res) => {
          setOptions(res);
        })
        .catch(() => enqueueSnackbar(t('message.serverError'), { variant: 'error' }));
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
        autoComplete="off"
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
