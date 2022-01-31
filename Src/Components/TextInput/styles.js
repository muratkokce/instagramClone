import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WhiteTransparent,
    margin: wp(2.5),
    padding: wp(4),
    borderRadius: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: FontSizeDict.font15,
    color: Colors.White,
    padding: wp(0.5),
    flex: 1,
  },
  password: {
    fontSize: FontSizeDict.font11,
    color: Colors.White,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    paddingRight: wp(6),
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: Colors.Gray,
  },
});

export default styles;
