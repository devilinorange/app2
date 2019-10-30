import { connect } from 'react-redux';
import LoginForm from '../LoginForm/index';
import { loginAction } from '../../store/session/actions';


const mapStateToProps = (state) => ({
  user: state.session.user,
  errorMessage: state.session.errorMessage,
  isFetching: state.session.isFetching,
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
