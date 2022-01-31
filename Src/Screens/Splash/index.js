import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StatusBar,
  Platform,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icons from 'Theme/Icons';
import setNavigationState from 'Redux/Actions/navigationActions';
import ScreenNames from 'Constants/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import * as Keychain from 'react-native-keychain';
import {getUserInfo} from 'Redux/Actions/userActions';
import {isEmpty} from 'lodash';
import Colors from 'Theme/Colors';

const Splash = () => {
  const dispatch = useDispatch();
  const [isContinueLogging, setIsContinueLogging] = useState(false);
  const {userInfo, userInfoErrorMessage} = useSelector(state => state.user);

  useEffect(() => {
    StatusBar.setHidden(true);
    //keychain' de value değerleri var ise user bilgileri ister
    //yok ise auth sayfasına yönlendirir
    Keychain.getGenericPassword()
      .then(value => {
        if (value?.username && value?.password) {
          setIsContinueLogging(true);
          dispatch(getUserInfo(value.username, value.password));
        } else {
          Keychain.resetGenericPassword();
          setTimeout(() => {
            dispatch(setNavigationState(ScreenNames.AUTH));
          }, 500);
        }
      })
      .catch(() => {
        Keychain.resetGenericPassword();
        setTimeout(() => {
          dispatch(setNavigationState(ScreenNames.AUTH));
        }, 500);
      });
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(userInfo)) {
      setIsContinueLogging(false);
      dispatch(setNavigationState(ScreenNames.APP));
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfoErrorMessage) {
      setIsContinueLogging(false);
      Keychain.resetGenericPassword();
      dispatch(setNavigationState(ScreenNames.AUTH));
    }
  }, [userInfoErrorMessage]);

  return (
    <View style={styles.container}>
      <Image source={Icons.InstagramLogo} style={styles.logo} />
      <Image source={Icons.InstagramFontLogo} style={styles.logo} />
      {isContinueLogging && (
        <View style={styles.loadView}>
          <ActivityIndicator
            size={Platform.OS === 'android' ? wp('8') : 'small'}
            color={Colors.Load}
          />
        </View>
      )}
    </View>
  );
};

export default Splash;
