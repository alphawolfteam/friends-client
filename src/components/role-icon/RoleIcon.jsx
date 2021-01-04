import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faUser } from '@fortawesome/free-solid-svg-icons';
import useStyles from './RoleIcon.styles';
import config from '../../appConf';

const { getRole } = config;

const RoleIcon = ({ role }) => {
  const classes = useStyles();

  return (
    <>
      {role !== undefined && (
        <div className={classes.root}>
          {role === getRole('manager').code && (
            <FontAwesomeIcon icon={faUserCog} className={classes.icon} />
          )}
          {role === getRole('friend').code && (
            <FontAwesomeIcon icon={faUser} className={classes.icon} />
          )}
        </div>
      )}
    </>
  );
};

export default RoleIcon;
