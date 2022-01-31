import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: FontSizeDict.font13,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    margin: wp(3),
    paddingLeft: wp(3),
    borderRadius: wp(3),
    height: wp('10'),
  },
  icon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: wp(3),
    tintColor: Colors.Gray,
  },
});

export default styles;
