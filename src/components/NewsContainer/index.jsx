import { connect } from 'react-redux';
import { NewsFetchInfo } from '../../store/news/actions';
import News from '../News/index';

const mapStateToProps = (state) => ({
  news: state.news.news,
  isFetching: state.news.isFetching,
  errorMessage: state.news.errorMessage,
});

const mapDispatchToProps = {
  NewsFetchInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
