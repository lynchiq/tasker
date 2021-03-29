import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LayoutRoute } from '../common/components/LayoutRoute';
import { RouteType } from './routes';

export default function renderRoutes(routes: RouteType[]) {
  return (
    routes ? (
      <Suspense fallback="Loading">
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              render={() => (
                route.component
                  ? <LayoutRoute Component={route.component} helmet={route.helmet} />
                  : null
              )}
            />
          ))}
        </Switch>
      </Suspense>
    ) : null
  );
}
