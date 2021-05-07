import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  formGroup: {
    '& + &': {
      marginTop: theme.spacing(2)
    }
  },
  actions: {
    display: 'flex'
  },
  input: {
    width: 400
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

export { useStyles };
