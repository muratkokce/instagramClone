import {wp, hp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(30),
    backgroundColor: 'black',
  },
  gridContainer: {
    width: wp(30),
    height: hp(15),
    marginRight: wp(62.5),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  loadView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
