import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@constants/Colors';
import {FARMS} from '@data/index';

export default function HomeScreen({navigation}) {
  const user = useSelector(state => state.auth.user);
  const {firstName} = user;

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  });

  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, {firstName}</Text>
        <MaterialCommunityIcons
          name="bell-circle"
          size={37}
          color={Colors.primary}
          style={styles.headerIcon}
        />
      </View>
      <Text style={styles.subHeaderText}>Farm cycles running: 0</Text>
      <Text style={styles.historyText}>Click here to view Farm History</Text>

      <FlatList
        data={FARMS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.footerLink}
        onPress={() => {
          navigation.navigate('ExploreFarms');
        }}>
        <Text style={styles.footerText}>Explore Farms</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: Colors.primary,
  },
  subHeaderText: {
    fontWeight: '400',
    fontSize: 18,
    color: Colors.text,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 19,
  },
  historyText: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    color: Colors.text,
    marginBottom: 50,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footerLink: {
    backgroundColor: Colors.text,
    alignSelf: 'flex-end',
    paddingVertical: 13,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
    right: 24,
  },
  footerText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
});
