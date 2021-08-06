import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

// stacks
import StartUpScreen from '@screens/StartUpScreen';
import AuthStack from '@navigations/AuthStack';
import MainNavigator from '@navigations/MainNavigator';
import ConfirmEmailScreen from '@screens/AuthScreens/ConfirmEmailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return <StartUpScreen />;
  }

  return (
    <Stack.Navigator headerMode="none">
      {user.token === null && user.refreshToken === null ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : user.isVerified ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      )}
    </Stack.Navigator>
  );
}
