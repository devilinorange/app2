import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { user, logoutAction } = props;
  const location = useLocation();
  const handleClick = () => {
    if (user) {
      logoutAction(null);
    }
  };

  return (
    <Menu size="massive" fluid widths="4">
      <Menu.Item as={NavLink} exact to="/" name="home" />
      <Menu.Item as={NavLink} to="/news" name="news" />
      <Menu.Item as={NavLink} to="/profile" name="profile" />
      {
        user
          ? <Menu.Item onClick={handleClick} name="logout" />
          : <Menu.Item as={NavLink} to={{ pathname: '/login', state: { from: location } }} name="login" />
      }
    </Menu>
  );
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  logoutAction: PropTypes.func,
};

Header.defaultProps = {
  user: {},
  logoutAction: () => 0,
};
