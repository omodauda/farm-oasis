import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import FocusAwareStatusBar from '@navigations/FocusAwareStatusBar';
import CustomHeader from '@components/CustomHeader';
import Colors from '@constants/Colors';
import {FARMS} from '@data/index';

export default function FarmDetailsScreen({navigation, route}) {
  const {farmId} = route.params;
  const farm = FARMS.find(f => f.id === farmId);
  return (
    <View style={styles.screen}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomHeader
        navigation={navigation}
        style={styles.header}
        title={farm.title}
      />
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={farm.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.description}>{farm.description}</Text>
          <View style={styles.section}>
            <Text style={styles.amountLabel}>Cost</Text>
            <Text style={styles.info}>₦{farm.amount}/unit</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.info}>{farm.location}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.info}>{farm.duration}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Return on investment</Text>
            <Text style={styles.primaryText}>{farm.roi}</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.primaryText}>SHARE WITH A FRIEND</Text>
            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text style={styles.primaryText}>FUND</Text>
              </View>
            </TouchableWithoutFeedback>
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
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 24,
  },
  imgContainer: {
    width: '100%',
    height: 223,
    minHeight: '27%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.text,
    marginBottom: 18,
    lineHeight: 20,
  },
  section: {
    marginBottom: 10,
  },
  amountLabel: {
    color: Colors.background,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  info: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.text,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: 'grey',
  },
  primaryText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'rgba(17, 17, 17, 0.25)',
  },
});
