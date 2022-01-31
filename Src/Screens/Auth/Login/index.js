import React from 'react';
import {View, TouchableOpacity, Image, Keyboard} from 'react-native';
import Icons from 'Theme/Icons';
import styles from './styles';
import LoginForm from 'Containers/Auth/LoginForm';

const Login = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Image source={Icons.InstagramFontLogo} style={styles.logo} />
        <LoginForm />
      </View>
    </TouchableOpacity>
  );
};

export default Login;
