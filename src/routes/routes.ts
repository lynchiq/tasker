import { HomePage, LoginPage, RegisterPage } from '../pages';
import { IRoute } from '../types/route.types';

export const ROUTES: IRoute[] = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/register',
    exact: true,
    component: RegisterPage,
  },
  {
    path: '/',
    exact: true,
    isPrivate: true,
    component: HomePage,
  },
];
