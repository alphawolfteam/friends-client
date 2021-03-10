import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import useStyles from './Paging.styles';

const Paging = ({ pages }) => {
  const classes = useStyles();
  const [value, setValue] = useState(pages.length - 1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {pages.map(({ headline }, index) => (
          <Tab key={index} label={headline} />
        ))}
      </Tabs>
      {pages.map(({ component }, index) => (
        <div
          className={classes.page}
          role="tabpanel"
          hidden={value !== index}
          key={index}
          id={index}
        >
          {value === index && (
          <Box p={3}>
            {component}
          </Box>
          )}
        </div>
      ))}
    </div>
  );
};

export default Paging;
