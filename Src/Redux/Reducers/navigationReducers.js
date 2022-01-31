import ActionTypes from 'Redux/ActionTypes';

const INITIAL_STATE = {
  isAuthLoading: true,
  navigateTo: null,
  initialState: null,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.NAVIGATE_TO:
      return {
        ...state,
        isAuthLoading: false,
        navigateTo: action.data.navigateTo,
        initialState: action.data.initialState,
      };

    default:
      return state;
  }
};

export default navigationReducer;
