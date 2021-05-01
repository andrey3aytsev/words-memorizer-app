import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './useStyles';

const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header>
      <nav>
        <NavLink className={ classes.navlink } exact to="/">Cards list</NavLink>
        <NavLink className={ classes.navlink } exact to="/add">Add new card</NavLink>
      </nav>
    </header>
  )
};

export { Header };
