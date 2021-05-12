import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { WordsList } from './components/wordsList';
import { CreateWordForm } from './components/createWordForm';
import { Header } from './components/header';
import { NotFoundPage } from './components/notFoundPage';
import { TestWords } from './components/testWords';
import { Container, Box } from '@material-ui/core';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Box my={3}>
        <Container maxWidth={false}>
          <Switch>
            <Route exact path="/"><WordsList /></Route>
            <Route exact path="/create"><CreateWordForm /></Route>
            <Route exact path="/test"><TestWords /></Route>
            <Route path="*"><NotFoundPage /></Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export { App };
