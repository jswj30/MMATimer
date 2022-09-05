import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStack from './HomeStack';
import TrainingStack from './TrainingStack';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#d61d36',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="access-alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingStack}
        options={{
          headerShown: false,
          title: 'Training',
          tabBarIcon: ({color, size}) => (
            <Icon name="sports-mma" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
