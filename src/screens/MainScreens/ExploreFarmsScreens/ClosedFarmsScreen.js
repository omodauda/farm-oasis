import React from 'react';
import FarmList from '@components/FarmList';
import {FARMS} from '@data/index';

export default function ClosedFarmsScreen({navigation}) {
  const closedFarms = FARMS.filter(farm => farm.status === 'closed');

  return <FarmList data={closedFarms} navigation={navigation} />;
}
