import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import useStyles from './Paging.styles';

const Paging = ({ pages }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(pages.length - 1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepper = () => (
    <MobileStepper
      variant="dots"
      steps={pages.length}
      position="static"
      activeStep={activeStep}
      className={classes.stepper}
      direction="rtl"
      nextButton={(
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === pages.length - 1}
        >
          <KeyboardArrowRight />
          {t('button.back')}
        </Button>
      )}
      backButton={(
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {t('button.next')}
          <KeyboardArrowLeft />
        </Button>
      )}
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        {pages[activeStep]}
      </div>
      {renderStepper()}
    </div>
  );
};

export default Paging;
