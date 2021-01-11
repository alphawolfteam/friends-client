import React from 'react';
import { Transition } from 'react-transition-group';
import useStyles from './ExistTransition.styles';

const ExistTransition = ({ inProp, element, duration }) => {
  const classes = useStyles({ duration });

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          className={classes.element}
          style={{
            ...transitionStyles[state],
          }}
        >
          {element}
        </div>
      )}
    </Transition>
  );
};

export default ExistTransition;
