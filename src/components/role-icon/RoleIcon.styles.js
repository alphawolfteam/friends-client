import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    left: '0em',
    top: '0em',
    position: 'absolute',
    minWidth: '1.8em',
    width: '1.8em',
    height: '50%',
    borderRight: `0.15em solid ${theme.palette.primary.main}`,
    boxShadow: '0.2vw 0 0.2vw -0.15vw grey',
    transform: 'skew(-45deg)',
  },
  icon: {
    right: '0.45em',
    top: '0.1em',
    position: 'relative',
    fontSize: '1.5em',
    color: theme.palette.font.main,
    cursor: 'auto',
    transform: 'skew(45deg)',
  },
}));

export default useStyles;
