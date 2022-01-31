import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  errorText: {
    fontSize: FontSizeDict.font11,
    color: Colors.Error,
    alignSelf: 'flex-end',
    marginRight: wp(3),
    backgroundColor: Colors.Transparent,
    padding: wp(1),
  },
});

export default styles;
