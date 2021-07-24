import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '@constants/Colors';

export default function FarmItem({onPress, item}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.farmItem}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.location}</Text>
          <View style={styles.section}>
            <Text style={styles.highlight}>₦{item.amount}</Text>
            <Text style={styles.label}>Amount</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.highlight}>{item.duration}</Text>
            <Text style={styles.label}>Duration</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.highlight}>{item.roi}</Text>
            <Text style={styles.label}>Return on investment</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  farmItem: {
    flexDirection: 'row',
    marginVertical: 18,
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderColor: '#00E23F',
    elevation: 9,
    shadowColor: 'black',
    borderRadius: 2,
    maxHeight: 150,
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    paddingHorizontal: 15,
  },
  title: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
  },
  highlight: {
    color: Colors.text,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: Colors.secondary,
  },
});
