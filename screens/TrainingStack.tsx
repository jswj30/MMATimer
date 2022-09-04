import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TrainingMain from '../components/Training/TrainingMain';

const Stack = createNativeStackNavigator();

const TrainingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="TrainingMain"
        component={TrainingMain}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TrainingStack;
