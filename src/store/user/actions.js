export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_RESPONSE = 'USER_INFO_RESPONSE';
export const USER_INFO_FAILED = 'USER_INFO_FAILED';

let controller = null;
let signal = null;

export const fetchAbort = () => {
  if (controller) {
    controller.abort();
  }
};

export const fetchInfo = () => (
  (dispatch) => {
    controller = new AbortController();
    signal = controller.signal;
    dispatch({
      type: USER_INFO_REQUEST,
      payload: true,
    });

    return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1', { signal })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 'ok') {
          dispatch({
            type: USER_INFO_RESPONSE,
            payload: json.data,
          });
        } else {
          dispatch({
            type: USER_INFO_FAILED,
            payload: json.message,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: USER_INFO_FAILED,
          payload: e.message,
        });
      });
  }
);
