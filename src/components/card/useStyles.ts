import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto',
    padding: theme.spacing(2)
  },
  actions: {
    padding: theme.spacing(1)
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}));

export { useStyles };


