import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopTabNavigator from '@navigations/TopTabNavigators/ExploreTopTabNavigator';

export default function ExploreFarmsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-backspace"
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTitle}>Explore Farms</Text>
      </View>
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
    paddingBottom: 55,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    marginLeft: '16%',
  },
});
