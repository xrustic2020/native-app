import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import s from './MapScreen-style';

interface IProps {
  navigation: any;
}

const requestGeoPermission = async (setCoords: any) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Data App Permission',
        message: 'Native App needs access to your geolocation ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(({coords}) => {
        const {latitude, longitude} = coords;
        const data = {latitude, longitude};
        setCoords(data);
      });
    } else {
      Alert.alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const MapScreen = () => {
  const [coords, setCoords] = useState({});
  useEffect(() => {
    requestGeoPermission(setCoords);
  }, []);

  console.log('coords', coords);

  // const coords = navigator.geolocation.watchPosition((position) => {
  //   let region = {
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude,
  //     latitudeDelta: 0.00922 * 1.5,
  //     longitudeDelta: 0.00421 * 1.5
  //   }
  // };

  return (
    <View style={s.container}>
      <Text style={s.heading}>Map Screen</Text>
      <View style={s.mapContainer} />
    </View>
  );
};

export default MapScreen;
