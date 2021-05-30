import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import Colors from '@constants/Colors';
import {loginValidationSchema} from '@validations/LoginValidation';

export default function LoginScreen({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View style={styles.intro}>
        <Text style={styles.introTitle}>Welcome back</Text>
        <Text style={styles.introText}>Log in to continue</Text>
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values =>
          console.log({...values, rememberUser: toggleCheckBox})
        }>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={(styles.formControl, styles.spacedInput)}>
              <Text style={styles.label}>Email Address</Text>
              <Field
                component={CustomTextInput}
                name="email"
                keyboardType="default"
                placeholder="AndrewAbel@gmail.com"
                placeholderTextColor="white"
                style={styles.input}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <Field
                component={CustomTextInput}
                name="password"
                keyboardType="default"
                placeholder="Enter Password"
                placeholderTextColor="white"
                style={styles.input}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.check}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: 'black', false: 'white'}}
              />
              <Text style={styles.notice}>Remember me</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.resetPasswordLink}>Forget Password?</Text>
            <Text style={styles.newUserText}>
              New User ?{' '}
              <Text
                style={styles.signupLink}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                Create account
              </Text>
            </Text>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 174,
  },
  intro: {
    marginBottom: 69,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  introText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  formControl: {
    marginBottom: 7,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  spacedInput: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  notice: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 16,
    borderRadius: 5,
    marginBottom: 53,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: '#243D44',
  },
  resetPasswordLink: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 26,
  },
  newUserText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  signupLink: {
    fontWeight: '700',
  },
});
