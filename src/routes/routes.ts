import React from 'react';

import { HomePage } from '../pages';

export interface RouteType {
  path?: string
  name?: string
  layout?: boolean
  exact?: boolean
  helmet: {
    title: string,
    description: string
  }
  component?: React.ComponentType
  routes?: RouteType[]
}

const routes: RouteType[] = [
  {
    path: '/home',
    name: 'Home',
    layout: true,
    exact: true,
    helmet: {
      title: 'Welcome to Tasker',
      description: 'Tasker home page',
    },
    component: HomePage,
  },
];

export default routes;
