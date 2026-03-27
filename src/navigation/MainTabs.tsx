import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ComponentShowcaseScreen from '../screens/ComponentShowcaseScreen';
import HomeScreen from '../screens/HomeScreen';

export type MainTabParamList = {
  Home: undefined;
  ComponentShowcase: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="ComponentShowcase"
        component={ComponentShowcaseScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
