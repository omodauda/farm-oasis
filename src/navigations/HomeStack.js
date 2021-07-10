import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Home stack screens
import HomeScreen from '@screens/MainScreens/HomeScreen';
import ExploreFarmsScreen from '@screens/MainScreens/ExploreFarmsScreen';
import FarmDetailsScreen from '@screens/MainScreens/FarmDetailsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ExploreFarms" component={ExploreFarmsScreen} />
      <Stack.Screen name="FarmDetails" component={FarmDetailsScreen} />
    </Stack.Navigator>
  );
}
