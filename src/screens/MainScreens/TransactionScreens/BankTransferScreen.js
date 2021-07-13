import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

export default function BankTransferScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        style={styles.header}
        title="Bank Transfer"
        navigation={navigation}
      />
      <Text style={styles.title}>
        You can now fund your wallet by simply making a bank or online transfer
        to a unique account number.
      </Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.bankInfo}>
          <View style={styles.section}>
            <Text style={styles.label}>Bank</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>Zenith Bank</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Account Number</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>2100115958</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Account Name</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>Farm Oasis</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Share</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 45,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.text,
  },
  scroll: {
    paddingVertical: 5,
  },
  bankInfo: {
    marginTop: 37,
    marginBottom: 55,
  },
  section: {
    marginBottom: 14,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: '#707070',
    marginBottom: 4,
  },
  dummyInput: {
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    paddingVertical: 20,
    paddingLeft: 9,
  },
  placeholder: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 17,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',
  },
});
