import React, {useState} from 'react';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import styles from './styles';
import Images from 'Theme/Images';
import Colors from 'Theme/Colors';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Videos from 'Theme/Videos';

//10mb'lik görseli ilk yüklemede çok beklettiği için tercih edilmedi
// import FastImage from 'react-native-fast-image';

const Posts = ({data, isSearchPost}) => {
  const [loaded, setLoaded] = useState(false);

  if (data?.post?.length === 1 && data?.post?.[0]?.type === 'video') {
    return (
      <View style={isSearchPost ? styles.gridContainer : styles.container}>
        <Video
          source={data?.id % 2 ? Videos.Video1 : Videos.Video2}
          style={styles.backgroundVideo}
          paused={isSearchPost ? false : true}
          repeat={isSearchPost ? true : false}
          resizeMode={isSearchPost ? 'stretch' : 'cover'}
          controls={true}
          muted={true}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <View style={styles.loadView}>
            <ActivityIndicator
              size={Platform.OS === 'android' ? wp('8') : 'small'}
              color={Colors.Load}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={isSearchPost ? styles.gridContainer : styles.container}>
      <Swiper loop={false} removeClippedSubviews={false}>
        {data?.post?.map((item, index) => {
          return (
            <>
              <Image
                source={
                  index % 2 ? Images.ExampleImages2 : Images.ExampleImages1
                }
                style={styles.image}
                onLoadStart={() => setLoaded(true)}
                onLoadEnd={() => setLoaded(false)}
              />
              {loaded && (
                <View style={styles.loadView}>
                  <ActivityIndicator
                    size={Platform.OS === 'android' ? wp('8') : 'small'}
                    color={Colors.Load}
                  />
                </View>
              )}
            </>
          );
        })}
      </Swiper>
    </View>
  );
};
export default Posts;
