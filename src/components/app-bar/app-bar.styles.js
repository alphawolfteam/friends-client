import { makeStyles } from "@material-ui/core/styles";
import config from '../shared/config';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    direction: 'rtl',
    boxShadow: `0px 2px 3px 0px ${config.style.mainColor}`
  },
  logo: {
    width: '20%',
    height: '15%'
  }
}));

export default useStyles;