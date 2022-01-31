import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Keyboard} from 'react-native';
import styles from './styles';
import TextInput from 'Components/TextInput';
import withError from 'Components/Hocs/WithError';
import {useDispatch, useSelector} from 'react-redux';
import {Field, Form} from 'react-final-form';
import Colors from 'Theme/Colors';
import Raised from 'Components/Raised';
import setNavigationState from 'Redux/Actions/navigationActions';
import ScreenNames from 'Constants/ScreenNames';
import {passwordValidation, usernameValidation} from 'Helpers/Validations';
import {isEmpty, valuesIn} from 'lodash';
import {getUserInfo} from 'Redux/Actions/userActions';
import * as Keychain from 'react-native-keychain';
import ActionTypes from 'Redux/ActionTypes';

const EnhancedTextInput = withError(TextInput);
let username;
let password;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isContinueLogging, setIsContinueLogging] = useState(false);
  const {userInfo, userInfoErrorMessage} = useSelector(state => state.user);

  useEffect(() => {
    if (!isEmpty(userInfo) && isContinueLogging) {
      if (username && password) {
        Keychain.setGenericPassword(username, password);
      }
      setIsContinueLogging(false);
      dispatch(setNavigationState(ScreenNames.APP));
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfoErrorMessage) {
      setIsContinueLogging(false);
      Keychain.resetGenericPassword();
      dispatch({type: ActionTypes.GET_USER_INFO_LOGOUT});
    }
  }, [userInfoErrorMessage]);

  return (
    <Form
      onSubmit={values => {
        const errors = {};
        errors.username = usernameValidation(values.username);
        errors.password = passwordValidation(values.password);
        if (valuesIn(errors).find(x => x)) {
          return errors;
        }
        Keyboard.dismiss();
        username = values.username;
        password = values.password;
        setIsContinueLogging(true);
        dispatch(getUserInfo(username, password));
        return null;
      }}
      render={props => {
        return (
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
              <Field
                name="username"
                render={({input, meta}) => {
                  return (
                    <EnhancedTextInput
                      placeholder="Phone number, username or email"
                      input={input}
                      meta={meta}
                    />
                  );
                }}
              />
              <Field
                name="password"
                render={({input, meta}) => {
                  return (
                    <EnhancedTextInput
                      placeholder="Password"
                      input={input}
                      meta={meta}
                      isSecureText
                    />
                  );
                }}
              />
            </KeyboardAvoidingView>
            <Raised
              title="Log In"
              backgroundColor={Colors.Primary}
              textColor={Colors.White}
              onPress={props.handleSubmit}
              containerStyle={styles.button}
              isLoading={isContinueLogging}
              errorMessage={userInfoErrorMessage}
            />
          </>
        );
      }}
    />
  );
};
export default LoginForm;
