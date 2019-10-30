import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state) => ({
  isAuth: state.session.user,
});

export default connect(mapStateToProps)(PrivateRoute);
