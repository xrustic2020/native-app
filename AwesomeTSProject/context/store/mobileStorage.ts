import AsyncStorage from '@react-native-async-storage/async-storage';

const load = async (key: string) => {
  try {
    const serializedState = await AsyncStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = async (key: string, value: any) => {
  try {
    const serializedState = JSON.stringify(value);
    await AsyncStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export default {load, save};
