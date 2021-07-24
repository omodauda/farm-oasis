import React from 'react';
import FarmList from '@components/FarmList';
import {FARMS} from '@data/index';

export default function OpenFarmsScreen({navigation}) {
  const openFarms = FARMS.filter(farm => farm.status === 'open');

  return <FarmList data={openFarms} navigation={navigation} />;
}
