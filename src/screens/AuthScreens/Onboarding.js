import React, {useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
  FlatList,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '@constants/Colors';

const {width} = Dimensions.get('window');

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

const IMG_WIDTH = width * 0.6;
const bgs = ['#B9D2D2', '#00E23F', '#B9D2D2'];

export default function Onboarding({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const Indicators = ({scrollx}) => {
    return (
      <View style={styles.Indicators}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const backgroundColor = scrollx.interpolate({
            inputRange,
            outputRange: bgs.map(bg => bg),
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${index}`}
              style={[styles.indicator, {backgroundColor}]}
            />
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  });

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item, index}) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const rotate = scrollX.interpolate({
              inputRange,
              outputRange: ['-30deg', '0deg', '30deg'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View style={[styles.listView, {transform: [{rotate}]}]}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </Animated.View>
            );
          }}
        />
      </View>
      <Indicators scrollx={scrollX} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.signupText}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  list: {
    flex: 0.7,
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
  },
  listView: {
    width,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    backgroundColor: 'grey',
    width: IMG_WIDTH,
    height: IMG_WIDTH,
    borderRadius: IMG_WIDTH / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    marginTop: 20,
  },
  body: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    marginTop: 14,
  },
  buttonContainer: {
    width,
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
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
    marginBottom: 20,
  },
  signupText: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
  },
  loginText: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
  },
  Indicators: {
    flexDirection: 'row',
  },
  indicator: {
    width: 9,
    height: 9,
    borderRadius: 9,
    margin: 5,
  },
});
