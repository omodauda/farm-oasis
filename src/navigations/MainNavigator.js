import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '@screens/MainScreens/HomeScreen';
import TransactionsScreen from '@screens/MainScreens/TransactionsScreen';
import ExploreFarmsScreen from '@screens/MainScreens/ExploreFarmsScreen';
import ProfileScreen from '@screens/MainScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="ExploreFarms" component={ExploreFarmsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
