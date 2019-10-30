export const LOG_IN_RESPONSE = 'LOG_IN_RESPONSE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const LOG_OUT = 'LOG_OUT';
export const LOG_ERROR = 'LOG_ERROR';

let controller = null;
let signal = null;

export const abortFetch = () => {
  if (controller) controller.abort();
};

export const loginAction = (email, password, changePage, clearPassword) => (
  (dispatch) => {
    controller = new AbortController();
    signal = controller.signal;
    dispatch({
      type: LOG_IN_REQUEST,
      payload: true,
    });

    return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 'ok') {
          changePage();
          dispatch({
            type: LOG_IN_RESPONSE,
            payload: json.data,
          });
        } else {
          clearPassword();
          dispatch({
            type: LOG_ERROR,
            payload: json.message,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: LOG_IN_FAILED,
          payload: e.message,
        });
      });
  }
);

export const logoutAction = (value) => ({
  type: LOG_OUT,
  payload: value,
});
