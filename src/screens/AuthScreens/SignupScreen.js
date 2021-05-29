import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import {signupValidationSchema} from '@validations/SignupValidation';
import Colors from '@constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Modal from '@components/Modal';

export default function SignupScreen() {
  const [modalVisible, setModalVisible] = useState(false);
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
            <View style={styles.formControl}>
              <Field
                component={CustomTextInput}
                name="email"
                keyboardType="default"
                placeholder="Email Address"
                style={styles.input}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Field
                component={CustomTextInput}
                name="phone"
                keyboardType="numeric"
                placeholder="Phone Number"
                style={styles.input}
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Field
                component={CustomTextInput}
                name="password"
                keyboardType="default"
                placeholder="Password"
                secureTextEntry
                style={styles.input}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.referralContainer}>
              <Text style={styles.referralText}>I have a referral code</Text>
              <Icon
                onPress={() => {
                  setModalVisible(true);
                }}
                name="info"
                size={22}
                color={Colors.primary}
              />
            </View>
            <Modal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
            <Text style={styles.info}>
              By clicking on{' '}
              <Text style={styles.quotedText}>"Create Account"</Text>, you agree
              to our{' '}
              <Text style={styles.underlinedText}>Terms & Conditions</Text> and{' '}
              <Text style={styles.underlinedText}>Privacy Policy</Text>
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
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
    borderRadius: 3,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  referralContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  referralText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    marginRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 30,
  },
  quotedText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
});