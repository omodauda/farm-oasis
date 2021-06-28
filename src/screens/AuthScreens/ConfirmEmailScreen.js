import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import Colors from '@constants/Colors';
import {confirmEmailValidationSchema} from '@validations/ConfirmEmailValidation';
import {verifyUser, resendConfirmationToken} from '@store/actions/auth';

export default function ConfirmEmailScreen() {
  const [error, setError] = useState(error);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(state => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();

  const confirmTokenHandler = async ({confirmation_token}) => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(verifyUser(confirmation_token));
      // navigation.navigate('ConfirmEmail');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const resendTokenHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(resendConfirmationToken());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

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
        onSubmit={values => confirmTokenHandler(values)}>
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
            {isLoading && (
              <ActivityIndicator size="small" color={Colors.primary} />
            )}
            {error && <Text style={styles.networkErrorText}>{error}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.buttonText}>Confirm Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => resendTokenHandler()}
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
  networkErrorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
