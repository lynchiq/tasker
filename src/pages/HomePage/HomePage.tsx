import { Container } from '@material-ui/core';

import { Layout } from '../../common/components/Layout/Layout';

export const HomePage = () => (
  <Layout title="Tasker CRM | Home page" description="Tasker CRM home page">
    <Container>
      <h1>Welcome to Tasker</h1>
      <p>
        Tasker is a technology for managing all your company’s relationships
        and interactions with customers and
        potential customers.
      </p>
    </Container>
  </Layout>
);
