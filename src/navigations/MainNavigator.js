import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Colors from '@constants/Colors';

// Screens
import HomeScreen from '@screens/MainScreens/HomeScreen';
import TransactionsScreen from '@screens/MainScreens/TransactionsScreen';
import ExploreFarmsScreen from '@screens/MainScreens/ExploreFarmsScreen';
import ProfileScreen from '@screens/MainScreens/ProfileScreen';

// tab bar icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <BottomTabBar
          {...props}
          state={{...props.state, routes: props.state.routes.slice(0, 3)}}
        />
      )}
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
        component={HomeScreen}
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
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="note-text" color={color} size={42} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <FontAwesome name="user-circle" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen name="ExploreFarms" component={ExploreFarmsScreen} />
    </Tab.Navigator>
  );
}
