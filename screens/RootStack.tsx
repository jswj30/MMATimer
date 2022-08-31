import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeMain from '../components/home/HomeMain';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeMain} />
    </Stack.Navigator>
  );
};

export default RootStack;
