import { NEWS_REQUEST, NEWS_RESPONSE, NEWS_FAILED } from './actions';

const initialState = {
  news: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
        errorMessage: '',
      };
    case NEWS_RESPONSE:
      return {
        ...state,
        news: action.payload,
        isFetching: false,
        errorMessage: '',
      };
    case NEWS_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
