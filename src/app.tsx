import React, { FunctionComponent } from 'react';
import { CardsList } from './components/cardsList';
import { CreateCardForm } from './components/createCardForm';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <CardsList />
        </Route>
        <Route path="/add">
          <CreateCardForm />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
