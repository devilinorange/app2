import { connect } from 'react-redux';
import { logoutAction } from '../../store/session/actions';
import Header from '../Header/index';


const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
