import {createStackNavigator} from '@react-navigation/stack';
import ScreenNames from 'Constants/ScreenNames';
import React from 'react';
import Home from 'Screens/Home';
import NavigationBar from 'Components/NavigationBar';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.HOME}>
      <Stack.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={{
          header: props => {
            return <NavigationBar {...props} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
