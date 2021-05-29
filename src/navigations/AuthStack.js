import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Auth Screens
import OnboardingScreen from '@screens/AuthScreens/Onboarding';
import SignupScreen from '@screens/AuthScreens/SignupScreen';
import LoginScreen from '@screens/AuthScreens/LoginScreen';
import ResetPasswordScreen from '@screens/AuthScreens/ResetPasswordScreen';
import ConfirmEmailScreen from '@screens/AuthScreens/ConfirmEmailScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
}
