import React, { useState } from 'react';
import { Info, People } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './ViewDialogContent.styles';
import TagsList from '../../shared/tags-list/TagsList';
import UsersList from '../users-list/UsersList';
import SearchUserBar from '../../shared/search-user-bar/SearchUserBar';

const ViewDialogContent = ({ group }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [searchedUsers, setSearchedUsers] = useState(group.users);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <Info className={classes.titleIcon} />
        {t('title.description')}
      </Typography>
      <Typography className={classes.groupDescription}>
        {group.description}
      </Typography>
      <hr className={classes.divider} />
      {group.tags.length > 0 && (
        <>
          <TagsList tags={group.tags} />
          <hr className={classes.divider} />
        </>
      )}
      <Typography className={classes.title}>
        <People className={classes.titleIcon} />
        {t('title.members')}
      </Typography>
      <SearchUserBar setSearchedUsers={setSearchedUsers} groupUsers={group.users} />
      <UsersList users={searchedUsers} />
    </div>
  );
};

export default ViewDialogContent;
