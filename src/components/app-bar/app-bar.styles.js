import { makeStyles } from "@material-ui/core/styles";
import config from '../shared/config';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: `0 2px 3px 0 ${config.style.mainColor}`,
  },
  logo: {
    width: '20%',
    height: '15%',
    paddingRight: '1%',
    paddingBottom: '0.5%'
  },
  username: {
    color: config.style.mainColor,
    fontFamily: config.style.fontFamily,
    flexGrow: 1,
  }
}));

export default useStyles;