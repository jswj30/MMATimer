import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeMain from '../components/home/HomeMain';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeMain}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
