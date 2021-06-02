import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import Colors from '@constants/Colors';
import {confirmEmailValidationSchema} from '@validations/ConfirmEmailValidation';

export default function ConfirmEmailScreen() {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.centeredView}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require('@assets/images/email_logo.png')}
          />
        </View>
        <Text style={styles.introTitle}>Check your mail</Text>
        <Text style={styles.introText}>
          We have sent a confirmation token to the email provided, click on{' '}
          resend if you didn't get it after 5 minutes.
        </Text>
      </View>

      <Formik
        validationSchema={confirmEmailValidationSchema}
        initialValues={{
          confirmation_token: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={styles.formControl}>
              <Text style={styles.label}>Confirmation Token</Text>
              <Field
                component={CustomTextInput}
                name="confirmation_token"
                keyboardType="numeric"
                placeholder=""
                placeholderTextColor="black"
                style={styles.input}
              />
              {errors.confirmation_token && (
                <Text style={styles.errorText}>
                  {errors.confirmation_token}
                </Text>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.buttonText}>Confirm Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.buttonText}>Resend Token</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 76,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 226, 63, 0.1)',
    borderRadius: 10,
    paddingVertical: 25,
    width: 130,
    marginBottom: 28,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.text,
    marginBottom: 15,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: Colors.text,
    marginBottom: 30,
    lineHeight: 25,
  },
  label: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    marginBottom: 5,
  },
  formControl: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    color: Colors.text,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  buttonContainer: {
    marginBottom: 35,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: '#243D44',
  },
});
