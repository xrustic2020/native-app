import React, {useContext, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import s from './ContexScreen-style';
import ctx from '../../../../context/AppContext';

import SolidButton from '../../../../components/SolidButton/SolidButton';
import SelectButton from '../../../../components/SelectButton/SelectButton';

const ContextScreen = () => {
  const [selectedValue, setSelectedValue] = useState(2);
  const {data, error, loading, getUserData, clearData} = useContext(ctx);

  const blockSizes = ['0', '100%', '49%', '32%'];
  const empty = () => {};
  const isHasData = data.length > 0;

  return (
    <View style={s.container}>
      <Text style={s.heading}>Get Users Lists</Text>
      <View style={s.select}>
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
        <SolidButton text={'clear list'} action={clearData} />
      ) : (
        <SolidButton text={'get users'} action={getUserData} />
      )}

      {isHasData && (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={[s.item, {width: blockSizes[selectedValue]}]}>
                <View style={s.textWrapper}>
                  <Text style={s.name}>{item.name}</Text>
                </View>

                <View style={s.textWrapper}>
                  <Text style={s.email}>{item.email}</Text>
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
