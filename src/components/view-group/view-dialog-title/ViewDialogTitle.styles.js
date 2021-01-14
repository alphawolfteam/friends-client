import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  groupTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25vw',
  },
  groupName: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    fontSize: '1em',
    marginLeft: '2%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  groupId: {
    direction: 'ltr',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    fontSize: '1em',
    marginLeft: '2%',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '7rem',
    height: '7rem',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginBottom: '2%',
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
