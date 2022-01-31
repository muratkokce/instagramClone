import {FontSizeDict, wp} from 'Helpers/Responsive';
import {StyleSheet} from 'react-native';
import Colors from 'Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
    alignItems: 'center',
  },
  flatList: {flex: 1},
  searchText: {
    fontSize: FontSizeDict.font13,
    color: Colors.White,
    textAlign: 'center',
  },
});

export default styles;
