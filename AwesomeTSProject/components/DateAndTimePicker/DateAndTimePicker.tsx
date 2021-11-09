import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './DateAndTimePicker.style';
import SolidButton from '../../components/SolidButton/SolidButton';

type AndroidMode = 'date' | 'datetime' | 'time' | undefined;
interface IProps {
  date: Date;
  action: (date: Date) => void;
}

const DateAndTimePicker = ({date, action}: IProps): JSX.Element => {
  const [pickerMode, setPickerMode] = useState<AndroidMode>('date');
  const [isShowPicker, setIsShowPicker] = useState(false);

  const onChangePicker = (
    event: React.SyntheticEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate || date;
    setIsShowPicker(Platform.OS === 'ios');
    action(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<AndroidMode>) => {
    setIsShowPicker(true);
    setPickerMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={styles.reminder}>
        <Text style={styles.reminderHeading}>--- Set a reminder ---</Text>
        <SolidButton text={'Choose date'} action={showDatepicker} />
        <SolidButton text={'Set time'} action={showTimepicker} />
      </View>
      {isShowPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={pickerMode}
          is24Hour={true}
          display="default"
          onChange={onChangePicker}
        />
      )}
    </View>
  );
};

export default DateAndTimePicker;
