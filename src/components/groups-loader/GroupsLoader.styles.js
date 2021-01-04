import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: '2%',
    width: '85%',
    borderRadius: 15,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.2vw 0.4vw, rgba(0, 0, 0, 0.23) 0 0.2vw 0.4vw',
  },
  cardBody: {
    padding: '0.5%',
    width: '100%',
    height: '13vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  info: {
    margin: '10%',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '1%',
    width: '5em',
    height: '2em',
    backgroundColor: 'lightgrey',
  },
  name: {
    marginRight: '5%',
    width: '8em',
    height: '2em',
    backgroundColor: 'lightgrey',
  },
  img: {
    width: '6em',
    height: '6em',
    marginRight: '5em',
    borderRadius: '50%',
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
