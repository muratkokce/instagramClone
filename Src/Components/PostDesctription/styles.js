import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: wp(1),
    paddingVertical: wp(3),
    marginBottom: wp(2),
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: Colors.Red,
  },
  likeText: {
    color: Colors.White,
    fontSize: FontSizeDict.fon13,
    fontWeight: '600',
    paddingHorizontal: wp(2),
  },
  text: {
    color: Colors.White,
    fontSize: FontSizeDict.fon13,
    paddingVertical: wp(1),
  },
  userText: {
    color: Colors.White,
    fontSize: FontSizeDict.fon13,
    fontWeight: '600',
    paddingVertical: wp(1),
    marginRight: wp(2),
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
