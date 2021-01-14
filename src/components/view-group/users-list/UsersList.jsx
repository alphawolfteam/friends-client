import React, { useMemo } from 'react';
import UserRaw from '../../shared/user-raw/UserRaw';
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
        {sortedUsers.map(({ user, role }) => (
          <UserRaw
            key={user.id}
            user={user}
            role={role}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
