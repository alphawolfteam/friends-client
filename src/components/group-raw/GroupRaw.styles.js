import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '85%',
    borderRadius: 15,
    border: `0.1vw solid ${config.style.primaryColor}`,
    '&:hover': {
      border: '0.1vw solid grey',
      boxShadow: '0.1vw 0.1vw 0.4vw 0vw grey',
    },
  },
  cardContent: {
    color: config.style.fontColor,
    padding: '0.5%',
    display: 'flex',
    height: '13vh',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  tagList: {
    width: '15vw',
    margin: '3%',
    display: 'flex',
    justifyContent: 'center',
  },
  groupAmount: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    fontWeight: '700',
  },
  groupName: {
    fontFamily: config.style.fontFamily,
    width: '10vw',
    fontSize: '1.5vw',
    fontWeight: '700',
    marginRight: '5%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '6em',
    height: '5em',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
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
