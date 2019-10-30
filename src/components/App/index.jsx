import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import HeaderContainer from '../HeaderContainer/index';
import ContentRoute from '../../routers/ContentRoute/index';

export default () => (
  <>
    <Container text>
      <HeaderContainer />
    </Container>
    <br />
    <Grid style={{ minHeight: '600px' }} centered>
      <ContentRoute />
    </Grid>
  </>
);
