import React, {useState, useContext} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './DateAndTimePicker.style';
import SolidButton from '../../components/SolidButton/SolidButton';
import {localeContex} from '../../context/LocaleProvider';

type AndroidMode = 'date' | 'datetime' | 'time';
interface IProps {
  date: Date;
  action: (date: Date) => void;
}

const DateAndTimePicker = ({date, action}: IProps): JSX.Element => {
  const [pickerMode, setPickerMode] = useState<AndroidMode>('date');
  const [isShowPicker, setIsShowPicker] = useState(false);
  const {translate} = useContext(localeContex);

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
    Platform.OS === 'ios' ? showMode('datetime') : showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={styles.reminder}>
        <Text
          style={
            styles.reminderHeading
          }>{`--- ${translate.reminderTitle} ---`}</Text>
        <SolidButton text={translate.changeDateBtn} action={showDatepicker} />
        <SolidButton text={translate.setTimeBtn} action={showTimepicker} />
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
