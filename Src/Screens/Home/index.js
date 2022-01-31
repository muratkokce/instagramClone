import SearchBar from 'Components/SearchBar';
import ExamplePosts from 'Constants/ExamplePosts';
import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StatusBar} from 'react-native';
import styles from './styles';
import PostDescription from 'Components/PostDesctription';
import Posts from 'Components/Posts';
import {isEmpty} from 'lodash';

const Home = () => {
  const [searchPosts, setSarchPosts] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const filterPost = text => {
    filterPostItem = ExamplePosts.filter(x => {
      //aranan harf/kelime içeriyorsa filtreler
      return x.description.toLowerCase().includes(text.toLowerCase());
    });
    setSearchText(text);
    setSarchPosts(filterPostItem);
  };

  const PostList = searchPosts && searchText ? searchPosts : ExamplePosts;

  return (
    <View style={styles.container}>
      <SearchBar onSearch={text => filterPost(text)} />
      {isEmpty(PostList) && <Text style={styles.searchText}>No result.</Text>}
      <FlatList
        data={PostList}
        extraData={ExamplePosts}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <>
              <Posts data={item} isSearchPost={searchText || false} />
              <PostDescription
                name={item?.name}
                description={item?.description}
                likeCount={item?.like}
              />
            </>
          );
        }}
      />
    </View>
  );
};

export default Home;
