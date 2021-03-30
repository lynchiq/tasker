import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { renderRoutes } from './common/helpers';
import { ROUTES } from './routes';

const App: React.FC = () => (
  <Router>
    <Switch>
      { renderRoutes(ROUTES) }
    </Switch>
  </Router>
);

export default App;
