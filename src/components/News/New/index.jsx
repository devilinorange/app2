import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function New(props) {
  const { title, text } = props;
  return (
    <Grid.Row columns="equal">
      <Grid.Column textAlign="justified">
        <Header dividing>{title}</Header>
        <p>{text}</p>
      </Grid.Column>
    </Grid.Row>
  );
}

New.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

New.defaultProps = {
  title: '',
  text: '',
};
