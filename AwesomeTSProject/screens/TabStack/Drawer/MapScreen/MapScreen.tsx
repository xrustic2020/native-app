import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const API_KEY = '';

const reverseGeocode = require('latlng-to-zip');

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
  const [ZIP, setZIP] = useState('*');
  useEffect(() => {
    requestGeoPermission(setCoords);
  }, []);

  const fakeCoords = useMemo(
    () => ({latitude: 38.8646148, longitude: -90.0969953}),
    [],
  );

  console.log('coords', coords);

  const getZIPCode = async () => {
    const zipcode = await reverseGeocode(fakeCoords, API_KEY);
    setZIP(zipcode);
    console.log('zipcode', zipcode);
  };

  getZIPCode();

  return (
    <View style={s.container}>
      <Text style={s.heading}>Map Screen</Text>
      <Text style={s.text}>
        ltd/lng: {fakeCoords.latitude} / {fakeCoords.longitude}
      </Text>
      <Text style={s.text}>ZIP {ZIP}</Text>
      <View style={s.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: fakeCoords.latitude,
            longitude: fakeCoords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          style={s.map}
        />
      </View>
    </View>
  );
};

export default MapScreen;
