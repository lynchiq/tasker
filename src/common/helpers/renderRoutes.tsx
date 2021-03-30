import { IRoute } from '../../types/route.types';
import { LayoutRoute } from '../components';

export const renderRoutes = (routes: IRoute[]) => (
  <>
    {routes.map(({
      component, exact, path, isPrivate,
    }: IRoute) => (
      <LayoutRoute
        key={path}
        path={path}
        exact={exact}
        isPrivate={isPrivate}
        component={component}
      />
    ))}
  </>
);
