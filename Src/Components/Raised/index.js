import {wp} from 'Helpers/Responsive';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Colors from 'Theme/Colors';
import styles from './styles';

const Raised = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  containerStyle,
  isLoading,
  errorMessage,
}) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.loadView}>
          <ActivityIndicator
            size={Platform.OS === 'android' ? wp('8') : 'small'}
            color={Colors.Load}
          />
        </View>
      ) : (
        <>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View
              style={[
                styles.container,
                containerStyle,
                {
                  backgroundColor,
                },
              ]}>
              <Text style={[styles.text, {color: textColor}]}>{title}</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};
export default Raised;
