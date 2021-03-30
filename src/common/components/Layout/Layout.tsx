import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface ILayout {
  title: string
  description: string
  children: ReactNode
}

export const Layout = ({ title, description, children }: ILayout) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>
    {children}
  </>
);
