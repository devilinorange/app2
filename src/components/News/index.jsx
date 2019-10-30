import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Container,
  Message,
  Loader,
} from 'semantic-ui-react';
import New from './New/index';
import { NewsFetchAbort } from '../../store/news/actions';

export default function News(props) {
  const {
    news,
    isFetching,
    errorMessage,
    NewsFetchInfo,
  } = props;

  useEffect(() => {
    NewsFetchInfo();
    return () => {
      NewsFetchAbort();
    };
  }, []);

  return (
    <Container text>
      {errorMessage && <Message error>Request failed</Message>}
      {isFetching || !news
        ? (
          <Loader active content="Loading..." />
        )
        : (
          <Grid columns="equal">
            {news.map((el) => <New key={el.id} title={el.title} text={el.text} />)}
          </Grid>
        )}
    </Container>
  );
}

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  NewsFetchInfo: PropTypes.func,
};

News.defaultProps = {
  news: [],
  isFetching: false,
  errorMessage: '',
  NewsFetchInfo: () => 0,
};
