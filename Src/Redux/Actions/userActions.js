import Axios from 'axios';
import ActionTypes from 'Redux/ActionTypes';

export const getUserInfo = (username, password) => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_USER_INFO});
    Axios({
      method: 'GET',
      url: `https://61f3bdb810f0f7001768c5df.mockapi.io/api/login/users`,
    })
      .then(response => {
        const data = response?.data;
        dispatch({
          type: ActionTypes.GET_USER_INFO_SUCCESS,
          data: {
            data,
          },
        });
      })
      .catch(err => {
        if (err) {
          const loginErrorMessage = 'An unexpected error has occurred!';
          dispatch({
            type: ActionTypes.GET_USER_INFO_FAIL,
            data: {
              loginErrorMessage,
            },
          });
        }
      });
  };
};
