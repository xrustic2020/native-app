import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import s from './ImagesScreen-style';

const PostsScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.heading}>Images Screen</Text>

      <FlatList
        style={s.list}
        data={[
          {path: require('../../../../images/nature11.png'), key: '1'},
          {
            path: {
              uri: 'https://freepngimg.com/thumb/tree/4-tree-png-image-download-picture.png',
            },
            key: '2',
          },
          {path: require('../../../../images/nature11.png'), key: '3'},
          {
            path: {
              uri: 'https://freepngimg.com/thumb/tree/4-tree-png-image-download-picture.png',
            },
            key: '4',
          },
          {path: require('../../../../images/nature11.png'), key: '5'},
          {
            path: {
              uri: 'https://freepngimg.com/thumb/tree/4-tree-png-image-download-picture.png',
            },
            key: '6',
          },
        ]}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View>
              <Image style={s.img} source={item?.path} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default PostsScreen;
