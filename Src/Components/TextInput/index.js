import React, {useState} from 'react';
import {
  Image,
  TextInput as RnTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'Theme/Colors';
import Icons from 'Theme/Icons';
import styles from './styles';

const TextInput = ({
  placeholder,
  isSecureText,
  input,
  meta,
  maxLength,
  textInputContainerStyle,
  autoCapitalize,
  keyboardType,
  containerStyle,
  textContentType,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <RnTextInput
          {...input}
          {...meta}
          textContentType={textContentType || 'none'}
          autoCapitalize={autoCapitalize || 'none'}
          secureTextEntry={isSecureText && visiblePassword}
          keyboardType={keyboardType || 'default'}
          style={[styles.textInput, textInputContainerStyle]}
          placeholderTextColor={Colors.Gray}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {isSecureText && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setVisiblePassword(!visiblePassword)}>
            <Image
              source={
                visiblePassword
                  ? Icons.PasswordInVisible
                  : Icons.PasswordVisible
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default TextInput;
