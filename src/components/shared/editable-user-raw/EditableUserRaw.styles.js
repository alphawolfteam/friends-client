import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    margin: '1%',
    width: '95%',
    height: '50%',
    boxShadow: 'inset 0 0 0.1vw 0 grey',
  },
  cardContent: {
    direction: 'rtl',
    padding: '0.5%',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default useStyles;
