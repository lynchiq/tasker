import { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IRoutePageComponentProps extends RouteComponentProps {
  childrenRoutes?: IRoute[];
}

export interface IRoute {
  path: string
  exact: boolean
  isPrivate?: boolean
  component: FunctionComponent
  childrenRoutes?: IRoute[]
}
