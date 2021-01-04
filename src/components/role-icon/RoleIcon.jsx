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
      {role === getRole('manager').code && (
        <div className={classes.root}>
          <FontAwesomeIcon icon={faUserCog} className={classes.icon} />
        </div>

      )}
      {role === getRole('friend').code && (
        <div className={classes.root}>
          <FontAwesomeIcon icon={faUser} className={classes.icon} />
        </div>
      )}
    </>
  );
};

export default RoleIcon;
