import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import LoginFormContainer from '../components/LoginFormContainer/index';


export default () => (
  <Grid.Column verticalAlign="middle" textAlign="left" style={{ maxWidth: '400px' }}>
    <Segment stacked>
      <LoginFormContainer />
    </Segment>
  </Grid.Column>
);
