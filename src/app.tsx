import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CardsList } from './components/cardsList';
import { CreateCardForm } from './components/createCardForm';
import { Header } from './components/header';
import { NotFoundPage } from './components/notFoundPage';
import { Container, Box } from '@material-ui/core';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Box my={3}>
        <Container maxWidth={false}>
          <Switch>
            <Route exact path="/">
              <CardsList />
            </Route>
            <Route exact path="/add">
              <CreateCardForm />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Container>
      </Box>

    </Router>
  );
};

export { App };
