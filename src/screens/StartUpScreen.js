import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@constants/Colors';

import {getUser} from '@store/actions/auth';

export default function StartUpScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const storage = await AsyncStorage.getItem('tokens');
      if (!storage) {
        navigation.navigate('Auth');
        return;
      }
      const tokens = JSON.parse(storage);
      const {accessToken, refreshToken} = tokens;
      dispatch(getUser(accessToken, refreshToken));
      navigation.navigate('Main');
    };
    getUserData();
  });

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <ImageBackground
        source={require('@assets/images/background_logo.png')}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image
            source={require('@assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>FarmOasis</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 14,
  },
  logoText: {
    fontSize: 38,
    color: Colors.primary,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
  },
});
