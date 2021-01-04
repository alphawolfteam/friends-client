import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '10%',
    zIndex: 1,
    borderRadius: 0,
  },
  optionsDiv: {
    position: 'absolute',
  },
  optionCard: {
    width: '19em',
    borderRadius: 0,
    border: '0.08vw solid grey',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    margin: '1%',
    width: '2em',
    height: '2em',
    backgroundColor: 'lightgrey',
  },
  raw: {
    width: '13em',
    margin: '2%',
    height: '0.6em',
    backgroundColor: 'lightgrey',
  },
  item: {
    animation: '$loader 6s ease-in-out',
  },
  '@keyframes loader': {
    '0%': {
      backgroundColor: 'rgba(165, 165, 165, 0.1)',
    },
    '50%': {
      backgroundColor: 'rgba(165, 165, 165, 0.3)',
    },
    '100%': {
      backgroundColor: 'rgba(165, 165, 165, 0.1)',
    },
  },
}));

export default useStyles;
