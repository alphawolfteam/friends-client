import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useTranslation } from 'react-i18next';
import useStyles from './SearchUserBar.styles';
import config from '../../../appConf';

const SearchUserBar = ({ setSearchedUsers, groupUsers }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue === '') setSearchedUsers(groupUsers);

    if (searchValue.length < config.length_limitations.min_length_user_search_value) return;

    setSearchedUsers(
      groupUsers.filter(
        ({ user }) => user.firstName.startsWith(searchValue)
          || user.lastName.startsWith(searchValue)
          || (`${user.firstName} ${user.lastName}`).startsWith(searchValue),
      ),
    );
  }, [searchValue, groupUsers]);

  useEffect(() => () => setSearchedUsers(groupUsers), []);

  return (
    <div className={classes.root}>
      <InputBase
        id="searchInput"
        placeholder={t('placeholder.searchFriend')}
        value={searchValue}
        onChange={handleSearchChange}
        className={classes.searchBar}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchUserBar;
