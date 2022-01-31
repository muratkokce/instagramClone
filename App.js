import React from 'react';
import {Provider} from 'react-redux';
import MainAppNavigator from 'Navigations/RootNavigator';
import Store from 'Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainAppNavigator />
    </Provider>
  );
};

export default App;
