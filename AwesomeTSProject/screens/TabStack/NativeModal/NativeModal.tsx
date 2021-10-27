import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

import SolidButton from '../../../components/SolidButton/SolidButton';

interface IProps {
  navigation: any;
}

const NativeModal = ({navigation}: IProps) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <View style={s.overlay}>
      <Modal
        style={s.overlay}
        animationType={'slide'}
        transparent={true}
        visible={showModal}>
        <View style={s.overlay}>
          <View style={s.container}>
            <Text>Modal Window</Text>

            <SolidButton
              text={'Close'}
              action={() => {
                setShowModal(false);
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: 200,
    paddingHorizontal: 50,
    marginVertical: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default NativeModal;
