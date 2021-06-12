import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '@constants/Colors';

export default function OngoingScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.centeredView}>
        <Image source={require('@assets/images/note.png')} />
        <Text style={styles.text}>You have no investments yet</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fund A Farm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 53,
    paddingBottom: 110,
  },
  centeredView: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 18,
    color: Colors.text,
    marginTop: 50,
    marginBottom: 23,
  },
  button: {
    backgroundColor: Colors.text,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primary,
  },
});
