import React from 'react';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './UserInfo.styles';

const UserRaw = ({ userObject }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {userObject.user.firstName}
      {' '}
      {userObject.user.lastName}
      {userObject.user.hierarchyFlat && (
        <CustomeTooltip
          title={userObject.user.hierarchyFlat}
          element={(
            <div className={classes.hierarchy}>
              {userObject.user.hierarchyFlat}
            </div>
          )}
        />
      )}
    </div>
  );
};

export default UserRaw;
