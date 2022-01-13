import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Switch,
  StyleSheet,
} from 'react-native';
import SearchIcon from '../../../../images/icons/search.svg';

import {colors} from '../../../../assets/constants/styles';

import styles from './LayoutScreen.style';

const PostsScreen = () => {
  const [isActiveSwitch, setIsActiveSwitch] = useState(false);

  const toggleSwitch = () => {
    setIsActiveSwitch(!isActiveSwitch);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.LIGHT_VIOLET} />
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <SearchIcon
            width={20}
            height={20}
            fill={colors.WHITE}
            style={styles.icon}
          />
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.heading} numberOfLines={1}>
          Lorem <Text style={styles.span}>ipsum</Text> dolor sit amet
          consectetur adipisicing elit. Quo, facere!
        </Text>
        <Text style={styles.heading} numberOfLines={1} ellipsizeMode={'head'}>
          Lorem <Text style={styles.span}>ipsum</Text> dolor sit amet
          consectetur adipisicing elit. Quo, facere!
        </Text>
        <Text style={styles.phone} dataDetectorType={'phoneNumber'}>
          063 777 22 11
        </Text>
        <View style={styles.box} />
        <Switch
          trackColor={{false: colors.GREY, true: colors.LIGHT_VIOLET}}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor={colors.GREY}
          onValueChange={toggleSwitch}
          value={isActiveSwitch}
        />
      </View>
    </View>
  );
};

export default PostsScreen;
