import {isEmpty} from 'lodash';
import React, {memo, useRef, useState} from 'react';
import {Image, Keyboard, TextInput, View, TouchableOpacity} from 'react-native';
import Colors from 'Theme/Colors';
import Icons from 'Theme/Icons';
import styles from './styles';

const SearchBar = memo(({onSearch}) => {
  const [value, setValue] = useState(null);
  const textInputRef = useRef(null);

  return (
    <View style={styles.textInputContainer}>
      <Image source={Icons.Search} style={styles.icon} />
      <TextInput
        selectionColor={Colors.Gray}
        ref={textInputRef}
        placeholder="Search"
        value={value}
        style={styles.textInput}
        placeholderTextColor={Colors.Gray}
        underlineColorAndroid="transparent"
        onChangeText={text => {
          setValue(text);
          onSearch(text);
        }}
      />
      {!isEmpty(value) && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setValue('');
            onSearch('');
            Keyboard.dismiss();
          }}>
          <Image source={Icons.Close} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
});

export default SearchBar;
