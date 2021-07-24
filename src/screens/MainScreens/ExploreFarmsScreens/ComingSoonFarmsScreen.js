import React from 'react';
import FarmList from '@components/FarmList';
import {FARMS} from '@data/index';

export default function ComingSoonFarmsScreen({navigation}) {
  const comingSoonFarms = FARMS.filter(farm => farm.status === 'coming soon');

  return <FarmList data={comingSoonFarms} navigation={navigation} />;
}
