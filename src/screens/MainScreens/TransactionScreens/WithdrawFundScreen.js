/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

import {ACCOUNTS} from '@data/index';

export default function WithdrawFundScreen({navigation}) {
  const {user: userAccount} = ACCOUNTS;
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        style={styles.header}
        title="Withdraw Funds"
        navigation={navigation}
      />
      <Text style={styles.title}>
        Kindly confirm account details and specify amount to withdraw from your
        FarmOasis wallet
      </Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.bankInfo}>
          <View style={styles.section}>
            <Text style={styles.label}>Bank</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>{userAccount.bank}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Account Number</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>
                {userAccount.accountNumber}
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Account Name</Text>
            <View style={styles.dummyInput}>
              <Text style={styles.placeholder}>{userAccount.accountName}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={[{...styles.dummyInput, ...styles.placeholder}]}
              placeholder="#10000"
              placeholderTextColor="grey"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: '#C4C4C4'}}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={handleSubmit}
            // disabled={!isValid}
            style={{...styles.button, backgroundColor: Colors.primary}}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 90,
  },
  button: {
    paddingVertical: 17,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',
  },
});
