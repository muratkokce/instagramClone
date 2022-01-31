import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
    paddingVertical: wp('4'),
  },
  text: {
    fontSize: FontSizeDict.font15,
    fontWeight: 'bold',
  },
  loadView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: FontSizeDict.font12,
    color: Colors.Error,
    alignSelf: 'center',
    marginTop: wp(1),
  },
  loadView: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: wp('4'),
    margin: wp(14),
  },
});

export default styles;
