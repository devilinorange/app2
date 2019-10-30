export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_RESPONSE = 'NEWS_RESPONSE';
export const NEWS_FAILED = 'NEWS_FAILED';

let controller = null;
let signal = null;

export const NewsFetchAbort = () => {
  if (controller) {
    controller.abort();
  }
};

export const NewsFetchInfo = () => (
  (dispatch) => {
    controller = new AbortController();
    signal = controller.signal;
    dispatch({
      type: NEWS_REQUEST,
      payload: true,
    });

    return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news', { signal })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 'ok') {
          dispatch({
            type: NEWS_RESPONSE,
            payload: json.data,
          });
        } else {
          dispatch({
            type: NEWS_FAILED,
            payload: 'Request failed',
          });
        }
      })
      .catch(() => {
        dispatch({
          type: NEWS_FAILED,
          payload: 'Request failed',
        });
      });
  }
);
