import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import {resetPasswordValidationSchema} from '@validations/ResetPasswordValidation';
import Colors from '@constants/Colors';

export default function ResetPasswordScreen() {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require('@assets/images/email_logo.png')}
        />
      </View>
      <Text style={styles.introTitle}>Check your mail</Text>
      <Text style={styles.introText}>
        We have sent a reset token to the email provided, click on{' '}
        <Text style={styles.resendToken}>resend</Text> if you didn't get it
        after 5 minutes.
      </Text>

      <Formik
        validationSchema={resetPasswordValidationSchema}
        initialValues={{
          reset_token: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={styles.formControl}>
              <Text style={styles.label}>Reset Token</Text>
              <Field
                component={CustomTextInput}
                name="reset_token"
                keyboardType="numeric"
                placeholder=""
                placeholderTextColor="black"
                style={styles.input}
              />
              {errors.reset_token && (
                <Text style={styles.errorText}>{errors.reset_token}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>New Password</Text>
              <Field
                component={CustomTextInput}
                name="password"
                keyboardType="default"
                placeholder=""
                placeholderTextColor="black"
                secureTextEntry
                style={styles.input}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Confirm Password</Text>
              <Field
                component={CustomTextInput}
                name="confirm_password"
                keyboardType="default"
                placeholder=""
                placeholderTextColor="black"
                secureTextEntry
                style={styles.input}
              />
              {errors.confirm_password && (
                <Text style={styles.errorText}>{errors.confirm_password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  imgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
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
    marginBottom: 15,
    lineHeight: 25,
  },
  resendToken: {
    color: Colors.primary,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
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
  spacedInput: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 5,
    marginBottom: 53,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: '#243D44',
  },
});
