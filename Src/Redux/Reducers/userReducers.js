import ActionTypes from 'Redux/ActionTypes';

const INITIAL_STATE = {
  userInfo: null,
  userInfoLoading: false,
  userInfoErrorMessage: null,
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_INFO:
      return {
        ...state,
        userInfo: null,
        userInfoLoading: true,
        userInfoErrorMessage: null,
      };

    case ActionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action?.data?.data?.[0],
        userInfoLoading: false,
        userInfoErrorMessage: null,
      };
    case ActionTypes.GET_USER_INFO_FAIL:
      return {
        ...state,
        userInfo: null,
        userInfoLoading: false,
        userInfoErrorMessage: action?.data?.loginErrorMessage,
      };
    case ActionTypes.GET_USER_INFO_LOGOUT:
      return {
        ...state,
        userInfo: null,
        userInfoLoading: false,
        userInfoErrorMessage: null,
      };
    default:
      return state;
  }
};

export default userReducers;
