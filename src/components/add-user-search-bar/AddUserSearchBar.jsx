import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './AddUserSearchBar.styles';
import UsersService from '../../services/UsersService';
import Autocomplete from '../autocomplete/Autocomplete';
import AutocompleteLoader from '../autocomplete-loader/AutocompleteLoader';

const MIN_SEARCH_VALUE_LENGTH = 2;

const AddUserSearchBar = ({ setSelectedUser }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(async () => {
    if (searchValue.length < MIN_SEARCH_VALUE_LENGTH) {
      setOptions([]);
    } else {
      setIsLoading(true);
      UsersService.searchUsers(searchValue)
        .then((res) => {
          setOptions(res);
          setIsLoading(false);
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
      {isLoading ? <AutocompleteLoader /> : (
        <Autocomplete
          options={options}
          setSelectedOption={(selectedOption) => {
            setSelectedUser(selectedOption);
            setSearchValue('');
          }}
          setOptions={(value) => setOptions(value)}
        />
      )}
    </div>
  );
};
export default AddUserSearchBar;
