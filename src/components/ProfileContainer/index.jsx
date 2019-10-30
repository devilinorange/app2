import { connect } from 'react-redux';
import { fetchInfo } from '../../store/user/actions';
import Profile from '../Profile/index';

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
  isFetching: state.user.isFetching,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = {
  fetchInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
