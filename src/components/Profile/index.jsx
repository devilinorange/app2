import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Loader,
  Container,
  Message,
} from 'semantic-ui-react';
import { fetchAbort } from '../../store/user/actions';

export default function Profile(props) {
  const {
    userInfo,
    isFetching,
    errorMessage,
    fetchInfo,
  } = props;

  useEffect(() => {
    fetchInfo();
    return () => fetchAbort();
  }, []);

  return (
    <Container text>
      {errorMessage && <Message error>Request Failed</Message>}
      {isFetching || !userInfo
        ? (
          <Loader active content="Loading..." />
        )
        : (
          <List>
            <List.Item>
              <List.Header>Город:</List.Header>
              {userInfo.city}
            </List.Item>
            <List.Item>
              <List.Header>Знание языков:</List.Header>
              <List.List>
                {userInfo.languages.map((el) => <List.Item key={el}>{el}</List.Item>)}
              </List.List>
            </List.Item>
            <List.Item>
              <List.Header>Ссылки:</List.Header>
              <List horizontal size="massive">
                {
                  userInfo.social.map(
                    (el) => el.label === 'web'
                    && (
                      <List.Item as="a" target="_blank" href={el.link} key={el.label}>
                        <List.Icon name="globe" />
                      </List.Item>
                    ),
                  )
                }
                {
                  userInfo.social.map(
                    (el) => el.label !== 'web'
                    && (
                      <List.Item as="a" target="_blank" href={el.link} key={el.label}>
                        <List.Icon name={el.label} />
                      </List.Item>
                    ),
                  )
                }
              </List>
            </List.Item>
          </List>
        )}
    </Container>
  );
}

Profile.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  isFetching: PropTypes.bool,
  fetchInfo: PropTypes.func,
  errorMessage: PropTypes.string,
};

Profile.defaultProps = {
  userInfo: {},
  isFetching: false,
  fetchInfo: () => 0,
  errorMessage: '',
};
