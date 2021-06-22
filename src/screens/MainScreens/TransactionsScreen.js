import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import Colors from '@constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopTabNavigator from '@navigations/TopTabNavigators/TransactionsTopTabNavigator';

export default function TransactionsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar
        backgroundColor={Colors.primary}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-backspace"
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTitle}>Transactions</Text>
      </View>
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 5,
  },
  headerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    marginLeft: '16%',
  },
});
