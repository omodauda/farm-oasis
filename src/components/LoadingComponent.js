import React from 'react';
import {ActivityIndicator} from 'react-native';
import Colors from '@constants/Colors';

export default function LoadingComponent({color = Colors.primary}) {
  return <ActivityIndicator size="large" color={color} />;
}
