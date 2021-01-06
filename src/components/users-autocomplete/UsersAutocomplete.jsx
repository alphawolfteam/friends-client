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
    <>
      { options.length > 0
      && (
      <div className={classes.root}>
        <hr className={classes.divider} />
        <div className={classes.optionsList}>
          {options.map((userObject) => (
            <Card
              key={userObject.id}
              className={classes.optionCard}
            >
              <Typography
                className={classes.optionContent}
                onClick={() => handleOnClick(userObject)}
              >
                <strong>
                  {userObject.fullName}
                </strong>
                {'- '}
                {userObject.hierarchyFlat}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

export default UsersAutocomplete;
