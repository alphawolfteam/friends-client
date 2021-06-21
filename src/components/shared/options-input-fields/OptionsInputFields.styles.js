import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%',
  },
  scrollBar: {
    width: '90%',
    marginTop: '1.5em',
    height: '12em',
    overflow: 'auto',
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2%',
    fontFamily: theme.typography.fontFamily,
  },
  message: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    fontWeight: '600',
    textAlign: 'center',
    userSelect: 'none',
  },
  inputArea: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.2%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    alignSelf: 'baseline',
    position: 'relative',
  },
  inputIcon: {
    color: theme.palette.primary.main,
    marginRight: '.25rem',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.1vw 0.2vw, rgba(0, 0, 0, 0.23) 0 0.1vw 0.2vw',
    paddingTop: '7%',
    paddingBottom: '7%',
  },
  active: {
    backgroundColor: 'rgba(36, 188, 169, 0.2)',
  },
  disabled: {
    backgroundColor: 'rgba(233, 235, 240, 0.9)',
  },
}));

export default useStyles;
