import {AsyncStorage} from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default __DEV__
  ? Reactotron.configure({
      name: 'locationAndYoutube',
      // host: '192.168.1.45',
    })
      .use(reactotronRedux())
      .useReactNative()
      .setAsyncStorageHandler(AsyncStorage)
      .connect()
  : {};
