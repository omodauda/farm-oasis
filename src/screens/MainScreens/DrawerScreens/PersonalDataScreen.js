import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';

export default function PersonalDataScreen({navigation}) {
  const user = useSelector(state => state.auth.user);
  const {firstName, lastName, phone} = user;
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar
        backgroundColor={Colors.primary}
        barStyle="dark-content"
      />
      <CustomHeader
        title="Personal Data"
        navigation={navigation}
        style={styles.header}
      />

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>{firstName}</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>{lastName}</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>{phone}</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder} numberOfLines={1}>
              Address
            </Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>D.O.B</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>Gender</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Bank Details</Text>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>{`${firstName} ${lastName}`}</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>************</Text>
          </View>
        </View>
        <View style={styles.lastSection}>
          <Text style={styles.title}>BVN Details</Text>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>{`${firstName} ${lastName}`}</Text>
          </View>
          <View style={styles.dummyInput}>
            <Text style={styles.placeholder}>***************</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    marginBottom: 5,
    paddingTop: 33,
    paddingBottom: 39,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 8,
  },
  dummyInput: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
  },
  placeholder: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 18,
    color: Colors.text,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: Colors.text,
    marginBottom: 7,
  },
  lastSection: {
    marginBottom: 30,
  },
});
