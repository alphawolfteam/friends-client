import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rolesSelect: {
    marginLeft: '0.5rem',
  },
  iconButton: {
    marginLeft: '15%',
    fontSize: '1.5rem',
    color: 'grey',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
  },
}));

export default useStyles;
