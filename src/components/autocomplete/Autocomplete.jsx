import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './Autocomplete.styles';

const Autocomplete = ({ options, setSelectedOption }) => {
  const classes = useStyles();

  const handleOnClick = (option) => {
    setSelectedOption(option);
  };

  // TODO: Add an icon next to every user

  return (
    <div className={classes.root}>
      <div className={classes.optionsDiv}>
        {options.map((option) => (
          <Card
            key={option.id}
            className={classes.optionCard}
            onClick={() => handleOnClick(option)}
          >
            <Typography dir="rtl" className={classes.optionContent}>
              <strong>
                {option.fullName}
              </strong>
              {' -'}
              {option.hierarchyFlat}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
