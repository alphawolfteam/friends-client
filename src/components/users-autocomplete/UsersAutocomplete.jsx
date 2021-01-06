import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './UsersAutocomplete.styles';

const UsersAutocomplete = ({ options, setOptions, setSelectedOption }) => {
  const classes = useStyles();

  const handleOnClick = (option) => {
    setSelectedOption(option);
    setOptions([]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.optionsDiv}>
        {options.map((userObject) => (
          <Card
            key={userObject.id}
            className={classes.optionCard}
          >
            <Typography
              className={classes.optionContent}
              onClick={() => handleOnClick(userObject)}
            >
              {userObject.fullName}
              {'- '}
              {userObject.hierarchyFlat}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsersAutocomplete;
