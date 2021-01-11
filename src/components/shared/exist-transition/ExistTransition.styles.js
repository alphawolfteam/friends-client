import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  element: {
    transition: ({ duration }) => `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
