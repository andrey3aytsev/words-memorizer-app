import { FunctionComponent } from 'react';
import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './useStyles';

const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography>
          <Link className={classes.link} color="inherit" component={NavLink} exact to="/">Cards list</Link>
          <Link className={classes.link} color="inherit" component={NavLink} exact to="/add">Add new card</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export { Header };
