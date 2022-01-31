import {hp, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
    paddingVertical: hp(5),
  },
  formView: {
    backgroundColor: 'yellow',
    width: wp(100),
  },
  logo: {
    resizeMode: 'contain',
    width: wp(40),
    height: wp(25),
    tintColor: Colors.White,
    alignSelf: 'center',
    margin: hp(5),
  },
  button: {
    marginHorizontal: wp(3),
    marginVertical: wp(10),
  },
});

export default styles;
