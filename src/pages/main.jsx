import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Welcome from '../components/Welcome/index';

export default () => (
  <Grid.Column verticalAlign="middle">
    <Container text>
      <Welcome />
    </Container>
  </Grid.Column>
);
