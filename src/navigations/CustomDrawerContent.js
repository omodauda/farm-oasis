import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Colors from '@constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function (props) {
  return (
    <View style={styles.drawer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContentScrollView}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require('@assets/images/avatar.png')}
              />
            </View>
            <Text style={styles.nameText}>Andrew Abel</Text>
            <Text style={styles.username}>ANDR1234</Text>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="settings-outline" size={32} />
              )}
              label="Settings"
              labelStyle={styles.labelStyle}
              //   onPress={() => props.navigation.navigate('Settings')}
            />
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => <AntDesign name="user" size={32} />}
              label="Personal Data"
              labelStyle={styles.labelStyle}
            />
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons name="lock" size={32} />
              )}
              label="Change Password"
              labelStyle={styles.labelStyle}
            />
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons name="message-alert" size={32} />
              )}
              label="About FarmOasis"
              labelStyle={styles.labelStyle}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <DrawerItem
          icon={({color, size}) => <AntDesign name="logout" size={32} />}
          label="Log out"
          labelStyle={styles.labelStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  drawerContentScrollView: {
    paddingTop: 0,
  },
  drawerContent: {},
  userInfo: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 26,
    paddingTop: 50,
    marginBottom: 10,
  },
  imgContainer: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 24,
    color: 'white',
    marginBottom: 6,
  },
  username: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    marginBottom: 3,
  },
  drawerSection: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 18,
  },
  labelStyle: {
    color: Colors.text,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  footer: {
    // marginTop: 68,
    // marginBottom: 40,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});
