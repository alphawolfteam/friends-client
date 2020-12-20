import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '70%',
    height: '50%',
    borderRadius: 30,
    border: `0.1vw solid ${config.style.mainColor}`,
    '&:hover': {
      border: '0.1vw solid grey',
      boxShadow: '0.1vw 0.1vw 0.4vw 0vw grey',
    },
  },
  cardContent: {
    fontFamily: config.style.fontFamily,
    color: config.style.fontColor,
    padding: '0.5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '1%',
  },
  groupAmount: {
    fontSize: '1vw',
    fontWeight: '700',
  },
  groupName: {
    fontSize: '1.6vw',
    fontWeight: '700',
    marginRight: '2%',
    whiteSpace: 'nowrap',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '5.5em',
    height: '4.5em',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginLeft: '5%',
  },
  img: {
    position: 'absolute',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)',
  },
}));

export default useStyles;
