import reactotron from 'reactotron-react-native';

const isDev = () => __DEV__;

const printLog = (logName, log) => {
  if (isDev) {
    reactotron.log(logName || 'Log', log);
  }
};

export default {
  printLog,
};
