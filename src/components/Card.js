import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '@constants/Colors';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardText}>{props.text}</Text>
      <View style={styles.cardButton}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 11,
    alignItems: 'center',
    elevation: 5,
  },
  cardTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 8,
    color: Colors.text,
    textAlign: 'center',
  },
  cardText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 15,
  },
  cardButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#C6E1AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
