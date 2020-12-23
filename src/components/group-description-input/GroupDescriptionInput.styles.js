import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    ...config.style.input,
    width: '90%',
    resize: 'none',
  },
}));

export default useStyles;
