import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import Colors from '@constants/Colors';

// Screens
import HomeStack from '@navigations/HomeStack';
import ProfileDrawerNaviagtor from '@navigations/ProfileDrawerNavigation';
import TransactionStack from '@navigations/TransactionStack';
import BankTransferScreen from '@screens/MainScreens/TransactionScreens/BankTransferScreen';

// tab bar icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 70,
          backgroundColor: '#E5E5E5',
        },
        labelStyle: {
          fontFamily: 'Montserrat-Medium',
          fontSize: 20,
        },
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.text,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="home-circle"
              size={42}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="note-text" color={color} size={42} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNaviagtor}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <FontAwesome name="user-circle" color={color} size={36} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
    </Stack.Navigator>
  );
}
