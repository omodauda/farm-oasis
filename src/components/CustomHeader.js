import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomHeader({navigation, style, title}) {
  return (
    <View style={style}>
      <MaterialIcons
        name="keyboard-backspace"
        size={28}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    marginLeft: '16%',
  },
});
