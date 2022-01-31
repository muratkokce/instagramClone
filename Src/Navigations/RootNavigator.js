import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from 'Constants/ScreenNames';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Appearance} from 'react-native';
import Splash from 'Screens/Splash';
import AppNavigator from './App';
import AuthNavigator from './Auth';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainAppNavigator = () => {
  const {navigateTo} = useSelector(state => state.navigation);
  const colorScheme = Appearance.getColorScheme();

  const Navigator = ({navigateTo}) => {
    if (navigateTo === ScreenNames.AUTH) {
      return (
        <>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <AuthNavigator />
        </>
      );
    }
    if (navigateTo === ScreenNames.APP) {
      return (
        <>
          <StatusBar
            backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
            barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          />
          <SafeAreaView style={styles.container}>
            <AppNavigator />
          </SafeAreaView>
        </>
      );
    }
    return <Splash />;
  };

  return (
    <NavigationContainer>
      <Navigator {...{navigateTo}} />
    </NavigationContainer>
  );
};

export default MainAppNavigator;
