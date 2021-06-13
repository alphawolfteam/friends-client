import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  divider: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '90%',
    height: '0.01em',
    marginTop: '0',
    backgroundColor: theme.palette.primary.main,
  },
  optionsList: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '50%',
    margin: '0.5em',
    minHeight: '50%',
  },
  optionCard: {
    width: '17rem',
    minHeight: '3em',
    paddingRight: '0.5em',
    marginBottom: '4%',
    background: 'none',
    boxShadow: 'none',
    direction: 'rtl',
    display: 'flex',
    wordBreak: 'break-all',
    '&:hover': {
      background: theme.palette.hover.main,
      boxShadow: 'none',
    },
  },

  groupCard: {
    width: '17rem',
    minHeight: '3em',
    paddingRight: '0.5em',
    marginBottom: '4%',
    background: 'none',
    boxShadow: 'none',
    direction: 'rtl',
    display: 'flex',
    wordBreak: 'break-all',
    '&:hover': {
      background: theme.palette.hover.main,
      boxShadow: 'none',
    },
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
    width: '50%',
  },

  groupAmount: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1em',
    fontWeight: '700',
    whiteSpace: 'nowrap',
  },

  groupTitle: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: theme.typography.fontFamily,
    width: '80%',
  },

  optionContent: {
    fontWeight: '500',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1em',
  },

  typeIcon: {
    marginLeft: '.5em',
  },
}));

export default useStyles;
