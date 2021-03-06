import React, {useContext, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import styles from './ContexScreen.style';
import ctx from '../../../../context/AppContext';

import SolidButton from '../../../../components/SolidButton/SolidButton';
import SelectButton from '../../../../components/SelectButton/SelectButton';
import {localeContex} from '../../../../context/LocaleProvider';

const ContextScreen = () => {
  const [selectedValue, setSelectedValue] = useState(2);
  const {data, error, loading, getUserData, clearData} = useContext(ctx);
  const {translate} = useContext(localeContex);

  const blockSizes = ['0', '100%', '49%', '32%'];
  const empty = () => {};
  const isHasData = data.length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{translate.coontextTitle}</Text>
      <View style={styles.select}>
        <SelectButton
          value={1}
          action={isHasData ? empty : setSelectedValue}
          active={selectedValue}
        />
        <SelectButton
          value={2}
          action={isHasData ? empty : setSelectedValue}
          active={selectedValue}
        />
        <SelectButton
          value={3}
          action={isHasData ? empty : setSelectedValue}
          active={selectedValue}
        />
      </View>
      {isHasData ? (
        <SolidButton text={translate.clearListBtn} action={clearData} />
      ) : (
        <SolidButton text={translate.getUserBtn} action={getUserData} />
      )}

      {isHasData && (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={[s.item, {width: blockSizes[selectedValue]}]}>
                <View style={styles.textWrapper}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>

                <View style={styles.textWrapper}>
                  <Text style={styles.email}>{item.email}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
          numColumns={selectedValue}
          columnWrapperStyle={selectedValue > 1 && s.contentContainer}
        />
      )}
      {error &&
        Alert.alert(`Sorry, error ${error.message}. Please, try again later`)}
    </View>
  );
};

export default ContextScreen;
