import {
  LOG_IN_RESPONSE,
  LOG_IN_REQUEST,
  LOG_IN_FAILED,
  LOG_OUT,
  LOG_ERROR,
} from './actions';

const initialState = {
  user: null,
  errorMessage: '',
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
        errorMessage: '',
      };
    case LOG_IN_RESPONSE:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        errorMessage: '',
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
