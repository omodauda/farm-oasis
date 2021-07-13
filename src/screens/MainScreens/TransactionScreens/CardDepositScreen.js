/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '@components/CustomHeader';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import Colors from '@constants/Colors';

import {cardDepositValidationSchema} from '@validations/CardDepositValidation';

export default function CardDepositScreen({navigation}) {
  const depositHandler = ({cardName, cardNumber, expiryDate, cvv, amount}) => {
    console.log({cardName, cardNumber, expiryDate, cvv, amount});
  };
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
          <Formik
            validationSchema={cardDepositValidationSchema}
            initialValues={{
              cardName: '',
              cardNumber: '',
              expiryDate: '',
              cvv: '',
              amount: '',
            }}
            onSubmit={values => depositHandler(values)}>
            {({handleSubmit, isValid, errors}) => (
              <>
                <View style={styles.section}>
                  <Text style={styles.label}>Name on card</Text>
                  <Field
                    component={CustomTextInput}
                    name="cardName"
                    keyboardType="default"
                    placeholder="Kayode Bamidele"
                    placeholderTextColor="grey"
                    style={styles.input}
                  />
                  {errors.cardName && (
                    <Text style={styles.errorText}>{errors.cardName}</Text>
                  )}
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>Card Number</Text>
                  <Field
                    component={CustomTextInput}
                    name="cardNumber"
                    keyboardType="numeric"
                    placeholder="1234 1234 1234 1234"
                    placeholderTextColor="grey"
                    style={styles.input}
                  />
                  {errors.cardNumber && (
                    <Text style={styles.errorText}>{errors.cardNumber}</Text>
                  )}
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>Expiry Date</Text>
                  <Field
                    component={CustomTextInput}
                    name="expiryDate"
                    keyboardType="numeric"
                    placeholder="05/21"
                    placeholderTextColor="grey"
                    style={styles.input}
                  />
                  {errors.expiryDate && (
                    <Text style={styles.errorText}>{errors.expiryDate}</Text>
                  )}
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>CVV</Text>
                  <Field
                    component={CustomTextInput}
                    name="cvv"
                    keyboardType="numeric"
                    placeholder="123"
                    placeholderTextColor="grey"
                    style={styles.input}
                  />
                  {errors.cvv && (
                    <Text style={styles.errorText}>{errors.cvv}</Text>
                  )}
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>Amount</Text>
                  <Field
                    component={CustomTextInput}
                    name="amount"
                    keyboardType="numeric"
                    placeholder="#10000"
                    placeholderTextColor="grey"
                    style={styles.input}
                  />
                  {errors.amount && (
                    <Text style={styles.errorText}>{errors.amount}</Text>
                  )}
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={{...styles.button, backgroundColor: '#C4C4C4'}}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!isValid}
                    style={{...styles.button, backgroundColor: Colors.primary}}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
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
  errorText: {
    color: 'red',
    fontSize: 16,
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
