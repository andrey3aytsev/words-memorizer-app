import React from 'react';
import { useStyles } from './useStyles';

const Preloader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}></div>
  )
};

export { Preloader };
