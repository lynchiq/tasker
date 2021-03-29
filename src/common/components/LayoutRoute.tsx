import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

interface Props {
  Component: React.ComponentType,
  helmet: {
    title: string,
    description: string
  }
}

export const LayoutRoute = ({ Component, helmet }: Props) => (
  <>
    <Helmet>
      <title>{helmet.title}</title>
      <meta name="description" content={helmet.description} />
    </Helmet>
    <Route render={() => <Component />} />
  </>
);
