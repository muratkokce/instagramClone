import {wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const NavigationBarHeight = wp(15);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: NavigationBarHeight,
    backgroundColor: Colors.Black,
    paddingHorizontal: wp(2),
  },
  logo: {
    width: wp(30),
    height: NavigationBarHeight * 0.8,
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
  userView: {
    flexDirection: 'row',
  },
  outIcon: {
    width: wp(10),
    height: NavigationBarHeight * 0.5,
    resizeMode: 'contain',
    tintColor: Colors.White,
  },
  profile: {
    width: wp(7.5),
    height: NavigationBarHeight * 0.5,
    resizeMode: 'stretch',
    borderRadius: wp(10),
    right: wp(2.5),
  },
});

export default styles;
