import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById('root')
  );
});
