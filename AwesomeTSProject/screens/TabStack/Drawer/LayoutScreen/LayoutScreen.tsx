import React, {useState} from 'react';
import {View, Text, TextInput, StatusBar, Switch} from 'react-native';
import SearchIcon from '../../../../images/icons/search.svg';

import {colors} from '../../../../assets/constants/styles';

import s from './LayoutScreen-style';

const PostsScreen = () => {
  const [isActiveSwitch, setIsActiveSwitch] = useState(false);

  const toggleSwitch = () => {
    setIsActiveSwitch(!isActiveSwitch);
  };

  return (
    <View style={s.container}>
      <StatusBar backgroundColor={colors.LIGHT_VIOLET} />
      <View style={s.header}>
        <View style={s.headerWrapper}>
          <SearchIcon
            width={20}
            height={20}
            fill={colors.WHITE}
            style={s.icon}
          />
          <TextInput style={s.input} />
        </View>
      </View>
      <Text style={s.heading} numberOfLines={1}>
        Lorem <Text style={s.span}>ipsum</Text> dolor sit amet consectetur
        adipisicing elit. Quo, facere!
      </Text>
      <Text style={s.heading} numberOfLines={1} ellipsizeMode={'head'}>
        Lorem <Text style={s.span}>ipsum</Text> dolor sit amet consectetur
        adipisicing elit. Quo, facere!
      </Text>
      <Text style={s.phone} dataDetectorType={'phoneNumber'}>
        063 777 22 11
      </Text>
      <View style={s.box} />
      <Switch
        trackColor={{false: colors.GREY, true: colors.LIGHT_VIOLET}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor={colors.GREY}
        onValueChange={toggleSwitch}
        value={isActiveSwitch}
      />
    </View>
  );
};

export default PostsScreen;
