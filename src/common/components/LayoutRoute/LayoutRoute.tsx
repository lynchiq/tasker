import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IRoute } from '../../../types/route.types';

const authenticated = true;

export const LayoutRoute = ({
  component: Component, exact, path, isPrivate,
}: IRoute) => (
  <>
    {isPrivate
      ? (
        <Route
          exact={exact}
          path={path}
          render={() => (authenticated ? <Component /> : <Redirect to="/login" />)}
        />
      )
      : (
        <Route
          exact={exact}
          path={path}
          render={() => <Component />}
        />
      )}
  </>
);
