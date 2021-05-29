import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import Colors from '@constants/Colors';

export default function ModalComponent({modalVisible, setModalVisible}) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.infoText}>
              A code you receive from your friends inviting you to join
              FarmOasis and earn a bonus!
            </Text>
            <Text
              onPress={() => {
                setModalVisible(false);
              }}
              style={styles.buttonText}>
              OK
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.75)',
  },
  modalView: {
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 18,
    width: '79%',
    borderRadius: 5,
    marginTop: 230,
    elevation: 9,
  },
  infoText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonText: {
    color: Colors.primary,
    textAlign: 'right',
    marginTop: 28,
    fontWeight: '700',
    fontSize: 16,
  },
});
