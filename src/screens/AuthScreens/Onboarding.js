import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from '@components/Carousel/Carousel';
import Colors from '@constants/Colors';

const data = [
  {
    title: 'Invest in a Farm',
    body: 'Sign-up and register to be able to view and invest in the selection of farms curated for this cycle',
    image: require('@assets/images/onboarding/img_one.png'),
  },
  {
    title: 'Empower Farmers',
    body: 'FarmOasis manages the fund for the farmer, making sure it goes to the right resources in hope that investors get their return on investment',
    image: require('@assets/images/onboarding/img_two.png'),
  },
  {
    title: 'Gain Returns',
    body: "After the harvest and once the produce has been sold, the capital will be returned to the investor's virtual wallet together with the profit shared",
    image: require('@assets/images/onboarding/img_three.png'),
  },
];

export default function Onboarding() {
  return (
    <View style={styles.screen}>
      <Carousel data={data} />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Create an account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    width: '80%',
    marginBottom: 30,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  loginButton: {
    width: '80%',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
  },
  signupText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
  loginText: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: '500',
  },
});
