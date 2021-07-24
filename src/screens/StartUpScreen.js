import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@constants/Colors';

// import {getUser} from '@store/actions/auth';

export default function StartUpScreen({navigation}) {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const getUserData = async () => {
      setTimeout(async () => {
        if (user.token === null && user.refreshToken === null) {
          return navigation.navigate('Auth');
        } else {
          navigation.navigate('Main');
        }
      }, 3000);
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

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
    fontWeight: '600',
    fontFamily: 'Montserrat-Bold',
  },
});
