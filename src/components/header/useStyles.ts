import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: theme.typography.fontWeightBold,

    '& + &': {
      marginLeft: theme.spacing(2),

    }
  }
}));

export { useStyles };
