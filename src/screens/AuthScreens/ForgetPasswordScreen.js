import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import Colors from '@constants/Colors';
import {forgetPasswordValidationSchema} from '@validations/ForgetPasswordValidation';

export default function ForgetPasswordScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.introTitle}>Forgot Password</Text>
      <Text style={styles.introText}>
        Enter the e-mail address associated with your account and we'll send an
        email with your reset token
      </Text>
      <Formik
        validationSchema={forgetPasswordValidationSchema}
        initialValues={{
          email: '',
        }}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('ResetPassword');
        }}>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={styles.formControl}>
              <Text style={styles.label}>Email Address</Text>
              <Field
                component={CustomTextInput}
                name="email"
                keyboardType="default"
                placeholder="e.g AndrewAbel@gmail.com"
                placeholderTextColor={Colors.text}
                style={styles.input}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Send Token</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 76,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 15,
  },
  introText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 41,
  },
  formControl: {
    marginBottom: 53,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 11,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    color: Colors.text,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 5,
    // marginBottom: 53,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: Colors.text,
  },
});
