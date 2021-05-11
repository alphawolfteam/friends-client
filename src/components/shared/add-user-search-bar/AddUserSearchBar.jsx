import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './AddUserSearchBar.styles';
import UsersService from '../../../services/UsersService';
import UsersAutocomplete from '../users-autocomplete/UsersAutocomplete';
import config from '../../../appConf';

const AddUserSearchBar = ({ setSelectedUser, groupUsers }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (searchValue.length < config.length_limitations.min_length_user_search_value) {
      setOptions([]);
    } else {
      UsersService.searchUsers(searchValue)
        .then((res) => {
          setOptions(
            res
              .filter((user) => groupUsers
                .every((groupUser) => groupUser.user.id !== user.id)),
          );
        })
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
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
