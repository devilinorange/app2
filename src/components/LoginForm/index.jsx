import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';
import { Redirect, useLocation } from 'react-router-dom';
import { abortFetch } from '../../store/session/actions';
import MessageFunction from './messages';

export default function LoginForm(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [needRedirect, setNeedRedirect] = useState(false);
  const location = useLocation();
  const { from } = location.state || { pathname: '/' };

  const {
    user,
    errorMessage,
    isFetching,
    loginAction,
  } = props;

  useEffect(() => () => {
    abortFetch();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'login') {
      setLogin(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    loginAction(
      login,
      password,
      () => {
        setNeedRedirect(true);
      },
      () => {
        setPassword('');
      },
    );
  };

  if (needRedirect) {
    return <Redirect to={from} />;
  }

  return (
    <>
      {user ? <Redirect to="/profile" />
        : (
          <Form size="large" onSubmit={handleSubmit}>
            <Form.Input name="login" disabled={isFetching} icon="user" iconPosition="left" placeholder="Username" label="User Name" value={login} onChange={handleChange} />
            <Form.Input name="password" disabled={isFetching} icon="lock" iconPosition="left" placeholder="Password" label="Password" type="password" value={password} onChange={handleChange} />
            {errorMessage && <Message negative>{MessageFunction(errorMessage)}</Message>}
            <Form.Button
              fluid
              loading={isFetching}
              primary
              disabled={!login || !password || isFetching}
            >
              Submit
            </Form.Button>
          </Form>
        )}
    </>
  );
}

LoginForm.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  errorMessage: PropTypes.string,
  loginAction: PropTypes.func,
  isFetching: PropTypes.bool,
};

LoginForm.defaultProps = {
  user: {},
  errorMessage: '',
  loginAction: () => 0,
  isFetching: false,
};
