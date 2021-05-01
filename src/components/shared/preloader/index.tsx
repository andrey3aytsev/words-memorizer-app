import { FunctionComponent } from 'react';
import { useStyles } from './useStyles';

const Preloader: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}></div>
  )
};

export { Preloader };
