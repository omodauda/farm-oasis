import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from '@constants/Colors';
import FarmItem from '@components/FarmItem';
import {FARMS} from '@data/index';

export default function OngoingScreen({navigation}) {
  const onGoingInvestments = useSelector(
    state => state.transactions.investments.onGoing,
  );
  return (
    <View style={styles.screen}>
      {onGoingInvestments.length < 1 ? (
        <ScrollView style={styles.emptyList}>
          <View style={styles.centeredView}>
            <Image source={require('@assets/images/note.png')} />
            <Text style={styles.text}>You have no investments yet</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ExploreFarms')}>
              <Text style={styles.buttonText}>Fund A Farm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.list}>
          <FlatList
            data={onGoingInvestments}
            keyExtractor={item => item.farmId}
            renderItem={({item}) => {
              let farm = FARMS.find(f => f.id === item.farmId);
              return <FarmItem item={farm} />;
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyList: {
    paddingTop: 53,
    paddingBottom: 110,
  },
  centeredView: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 18,
    color: Colors.text,
    marginTop: 50,
    marginBottom: 23,
  },
  button: {
    backgroundColor: Colors.text,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 18,
    color: Colors.primary,
  },
  list: {
    paddingHorizontal: 24,
  },
});
