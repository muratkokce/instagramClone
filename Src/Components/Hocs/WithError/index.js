import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const RenderErrorMessage = ({ meta }) => {
  if ((meta?.error || meta?.submitError) && !meta?.dirtySinceLastSubmit) {
    return <Text style={styles.errorText}>{meta?.submitError}</Text>;
  }
  return null;
};

const withError = (WrapperComponent) => ({ ...props }) => {
  const { meta } = props;
  return (
    <View style={styles.container}>
      <WrapperComponent {...props} />
      <RenderErrorMessage meta={meta} />
    </View>
  );
};

export default withError;
