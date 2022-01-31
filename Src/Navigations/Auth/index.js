import {createStackNavigator} from '@react-navigation/stack';
import ScreenNames from 'Constants/ScreenNames';
import React from 'react';
import Login from 'Screens/Auth/Login';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.LOGIN}
      component={Login}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
