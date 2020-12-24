import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '90%',
    height: '50%',
    boxShadow: 'inset 0 0 0.1vw 0 grey',
  },
  cardContent: {
    padding: '0.5%',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
}));

export default useStyles;
