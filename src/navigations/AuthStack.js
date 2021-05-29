import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '@constants/Colors';

// Auth Screens
import OnboardingScreen from '@screens/AuthScreens/Onboarding';
import SignupScreen from '@screens/AuthScreens/SignupScreen';
import LoginScreen from '@screens/AuthScreens/LoginScreen';
import ResetPasswordScreen from '@screens/AuthScreens/ResetPasswordScreen';
import ConfirmEmailScreen from '@screens/AuthScreens/ConfirmEmailScreen';
import {color} from 'react-native-reanimated';

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
          headerBackTitleStyle: {
            // color: Colors.primary,
          },
        }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTintColor: Colors.primary,
          // headerBackTitleStyle: {
          //   color: Colors.primary,
          // },
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
}
