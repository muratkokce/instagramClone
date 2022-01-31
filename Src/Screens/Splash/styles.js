import {wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: wp(25),
    height: wp(25),
  },
  loadView: {
    position: 'absolute',
    bottom: wp(15),
  },
});

export default styles;
