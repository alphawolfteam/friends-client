import React, { useMemo } from 'react';
import UserRaw from '../user-raw/UserRaw';
import useStyles from './UsersList.styles';

const UsersList = ({ users }) => {
  const classes = useStyles();

  const sortedUsers = useMemo(() => users.sort((firstUser, secondUser) => {
    return secondUser.role - firstUser.role;
  }),
  [users]);

  return (
    <div className={classes.root}>
      <div className={classes.scrollBarContent}>
        {sortedUsers.map((userObject) => (
          <UserRaw
            key={userObject.user.id}
            userObject={userObject}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
