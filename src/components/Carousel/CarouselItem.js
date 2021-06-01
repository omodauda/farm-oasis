import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Colors from '@constants/Colors';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

export default function CarouselItem({item, index}) {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    width: 258,
    height: 258,
    borderRadius: 129,
    backgroundColor: Colors.secondary,
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    paddingTop: 20,
  },
  body: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
    paddingTop: 14,
  },
});
