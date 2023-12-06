import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Greeting} />
    </Switch>
  );
};

export default App;
