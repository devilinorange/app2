import { USER_INFO_REQUEST, USER_INFO_RESPONSE, USER_INFO_FAILED } from './actions';

const initialState = {
  userInfo: null,
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
        errorMessage: '',
      };
    case USER_INFO_RESPONSE:
      return {
        ...state,
        userInfo: action.payload,
        isFetching: false,
        errorMessage: '',
      };
    case USER_INFO_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: 'Unknown error',
      };
    default:
      return state;
  }
};
