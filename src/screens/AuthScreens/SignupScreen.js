import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import {signupValidationSchema} from '@validations/SignupValidation';
import Colors from '@constants/Colors';

export default function SignupScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.headerTitle}>Let's get to know you</Text>
      <Text style={styles.headerText}>Create an account and start earning</Text>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={styles.formControl}>
              <Field
                component={CustomTextInput}
                name="firstName"
                keyboardType="default"
                placeholder="First Name"
                style={styles.input}
              />
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Field
                component={CustomTextInput}
                name="lastName"
                keyboardType="default"
                placeholder="Last Name"
                style={styles.input}
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 24,
    color: Colors.primary,
  },
  headerText: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 10,
  },
  formControl: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
