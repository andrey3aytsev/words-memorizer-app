import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';


const Header: FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <nav>
          <NavLink exact to="/">Cards list</NavLink>
          <NavLink exact to="/add">Add new card</NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  )
};

export { Header };
