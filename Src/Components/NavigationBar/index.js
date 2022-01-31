import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import setNavigationState from 'Redux/Actions/navigationActions';
import Icons from 'Theme/Icons';
import styles from './styles';
import ScreenNames from 'Constants/ScreenNames';
import * as Keychain from 'react-native-keychain';
import ActionTypes from 'Redux/ActionTypes';
import {useDispatch, useSelector} from 'react-redux';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.user);

  return (
    <View style={styles.container}>
      <Image source={Icons.InstagramFontLogo} style={styles.logo} />
      <View style={styles.userView}>
        <Image
          style={styles.profile}
          source={
            userInfo?.profilePhoto
              ? {
                  uri: userInfo?.profilePhoto.replace('http', 'https'),
                }
              : Icons.UserPhoto
          }
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Keychain.resetGenericPassword();
            setTimeout(() => {
              dispatch({type: ActionTypes.GET_USER_INFO_LOGOUT});
              dispatch(setNavigationState(ScreenNames.AUTH));
            }, 250);
          }}>
          <Image source={Icons.LogOut} style={styles.outIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBar;
