import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

export { useStyles };
