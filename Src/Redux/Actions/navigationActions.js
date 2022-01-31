import ActionTypes from 'Redux/ActionTypes';

const setNavigationState = (navigateTo, initialState) => dispatch => {
  dispatch({
    type: ActionTypes.NAVIGATE_TO,
    data: { navigateTo, initialState },
  });
};

export default setNavigationState;
