import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
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
import LoadingComponent from '@components/LoadingComponent';
import {loginValidationSchema} from '@validations/LoginValidation';
import {login} from '@store/actions/auth';

export default function LoginScreen({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const loginHandler = async ({email, password}) => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(login(email, password));
      navigation.navigate('Main');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
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
        onSubmit={
          values => loginHandler(values)
          // console.log({...values, rememberUser: toggleCheckBox})
        }>
        {({handleSubmit, isValid, errors}) => (
          <>
            <View style={(styles.formControl, styles.spacedInput)}>
              <Text style={styles.label}>Email Address</Text>
              <Field
                component={CustomTextInput}
                name="email"
                keyboardType="default"
                placeholder="e.g AndrewAbel@gmail.com"
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
                secureTextEntry
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

            {isLoading && <LoadingComponent color="white" />}
            {error && <Text style={styles.networkErrorText}>{error}</Text>}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <Text
              style={styles.resetPasswordLink}
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              Forget Password?
            </Text>
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
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    marginBottom: 5,
  },
  introText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
  },
  formControl: {
    marginBottom: 7,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: 14,
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
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  notice: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
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
    fontFamily: 'Montserrat-Medium',
    color: '#243D44',
  },
  resetPasswordLink: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 26,
  },
  newUserText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    textAlign: 'center',
  },
  signupLink: {
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
  networkErrorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
