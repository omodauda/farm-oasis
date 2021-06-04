import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// stacks
import AuthStack from '@navigations/AuthStack';
import MainNavigator from '@navigations/MainNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}
