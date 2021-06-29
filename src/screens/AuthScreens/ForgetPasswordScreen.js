import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
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
import LoadingComponent from '@components/LoadingComponent';

import {forgetPassword} from '@store/actions/auth';

export default function ForgetPasswordScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const forgetPasswordHandler = async ({email}) => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(forgetPassword(email));
      navigation.navigate('ResetPassword', {email});
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

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
        onSubmit={values => forgetPasswordHandler(values)}>
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

            {isLoading && <LoadingComponent />}
            {error && <Text style={styles.networkErrorText}>{error}</Text>}

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
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.text,
    marginBottom: 15,
  },
  introText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: Colors.text,
    marginBottom: 41,
  },
  formControl: {
    marginBottom: 53,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: Colors.text,
    marginBottom: 11,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    color: Colors.text,
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
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
    // marginBottom: 53,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: Colors.text,
  },
  networkErrorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
