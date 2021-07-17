import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import {changePasswordValidationSchema} from '@validations/ChangePasswordValidation';

export default function ChangePasswordScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar
        backgroundColor={Colors.primary}
        barStyle="dark-content"
      />
      <CustomHeader
        title="Change Password"
        navigation={navigation}
        style={styles.header}
      />
      <View style={styles.form}>
        <Formik
          validationSchema={changePasswordValidationSchema}
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, isValid, errors}) => (
            <>
              <View style={styles.formControl}>
                <Field
                  component={CustomTextInput}
                  name="currentPassword"
                  keyboardType="default"
                  placeholder="Current Password"
                  placeholderTextColor={Colors.text}
                  style={styles.input}
                  secureTextEntry
                />
                {errors.currentPassword && (
                  <Text style={styles.errorText}>{errors.currentPassword}</Text>
                )}
              </View>
              <View style={styles.formControl}>
                <Field
                  component={CustomTextInput}
                  name="newPassword"
                  keyboardType="default"
                  placeholder="New Password"
                  placeholderTextColor={Colors.text}
                  style={styles.input}
                  secureTextEntry
                />
                {errors.newPassword && (
                  <Text style={styles.errorText}>{errors.newPassword}</Text>
                )}
              </View>
              <View style={styles.formControl}>
                <Field
                  component={CustomTextInput}
                  name="confirmNewPassword"
                  keyboardType="default"
                  placeholder="Confirm Password"
                  placeholderTextColor={Colors.text}
                  style={styles.input}
                  secureTextEntry
                />
                {errors.confirmNewPassword && (
                  <Text style={styles.errorText}>
                    {errors.confirmNewPassword}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.buttonText}>Change Password</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingTop: 33,
    paddingBottom: 39,
  },
  form: {
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  formControl: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.text,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: Colors.text,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  button: {
    width: '80%',
    backgroundColor: Colors.primary,
    paddingVertical: 13,
    marginTop: 24,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
