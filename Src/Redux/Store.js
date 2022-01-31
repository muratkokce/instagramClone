import Reactotron from 'Helpers/Reactotron';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import navigationReducer from './Reducers/navigationReducers';
import userReducers from './Reducers/userReducers';

const newReducers = combineReducers({
  navigation: navigationReducer,
  user: userReducers,
});

const myStore = __DEV__
  ? createStore(
      newReducers,
      {},
      compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
    )
  : createStore(newReducers, {}, applyMiddleware(thunk));

export default myStore;
