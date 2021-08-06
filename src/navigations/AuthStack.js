import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '@constants/Colors';

// Auth Screens
import OnboardingScreen from '@screens/AuthScreens/Onboarding';
import SignupScreen from '@screens/AuthScreens/SignupScreen';
import LoginScreen from '@screens/AuthScreens/LoginScreen';
import ForgetPasswordScreen from '@screens/AuthScreens/ForgetPasswordScreen';
import ResetPasswordScreen from '@screens/AuthScreens/ResetPasswordScreen';

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
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTintColor: Colors.primary,
        }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTintColor: Colors.text,
        }}
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}
