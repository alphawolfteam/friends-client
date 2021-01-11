import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    direction: 'rtl',
    fontWeight: '700',
    border: '0.1vw solid grey',
    '&:focus, &:hover': {
      border: `0.1vw solid ${theme.palette.primary.main}`,
    },
  },
}));

export default useStyles;
