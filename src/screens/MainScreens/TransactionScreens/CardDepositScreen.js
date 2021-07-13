/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

export default function CardDepositScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        style={styles.header}
        navigation={navigation}
        title="Card Deposit"
      />
      <Text style={styles.title}>
        Fund your wallet directly with your debit card
      </Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cardInfo}>
          <View style={styles.section}>
            <Text style={styles.label}>Name on card</Text>
            <TextInput
              style={styles.input}
              placeholder="Kayode Bamidele"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="1234 1234 1234 1234"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="05/21"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="10000"
              placeholderTextColor="grey"
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
    paddingVertical: 10,
  },
  cardInfo: {
    marginTop: 37,
    marginBottom: 35,
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
  input: {
    height: 55,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    paddingVertical: 20,
    paddingLeft: 9,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
