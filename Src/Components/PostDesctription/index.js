import React from 'react';
import {View, Text, Image} from 'react-native';
import Icons from 'Theme/Icons';
import styles from './styles';

const PostDescription = ({name, description, likeCount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={Icons.Like} style={styles.icon} />
        <Text style={styles.likeText}>{likeCount || 0} Like</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.userText}>{name || ''}</Text>
        <Text style={styles.text}>{description || ''}</Text>
      </View>
    </View>
  );
};

export default PostDescription;
