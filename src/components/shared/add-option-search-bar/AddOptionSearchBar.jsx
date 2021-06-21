import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './AddOptionSearchBar.styles';
import UsersService from '../../../services/UsersService';
import GroupsService from '../../../services/GroupsService';
import OptionsAutocomplete from '../options-autocomplete/OptionsAutocomplete';
import config from '../../../appConf';

const AddOptionsSearchBar = ({ setSelectedUser, groupUsers, groupId }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (
      searchValue.length
      < config.length_limitations.min_length_user_search_value
    ) {
      setOptions([]);
    } else {
      UsersService.searchUsers(searchValue)
        .then((res) => res.filter((user) => !GroupsService.isUserExist(groupUsers, user.id)))
        .then(async (users) => setOptions(
          users.concat(
            (await GroupsService.searchPrivateGroups(searchValue))
              .concat(await GroupsService.searchPublicGroups(searchValue))
              .filter((group) => group._id !== groupId),
          ),
        ))
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
    }
  }, [searchValue, groupUsers]);

  const handleOnChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  return (
    <div className={classes.root}>
      <InputBase
        id="searchInput"
        placeholder={t('placeholder.addFriend')}
        value={searchValue}
        onChange={handleOnChange}
        className={classes.searchBar}
        autoComplete="off"
      />
      <OptionsAutocomplete
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
export default AddOptionsSearchBar;
