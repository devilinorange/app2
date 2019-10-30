import { combineReducers } from 'redux';
import newsReducer from './news/reducer';
import sessionReducer from './session/reducer';
import userInfoReducer from './user/reducer';

export default combineReducers({
  news: newsReducer,
  session: sessionReducer,
  user: userInfoReducer,
});
