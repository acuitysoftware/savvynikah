import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

// create a component
const UserStack = () => {
  return (
    <Stack.Navigator
            initialRouteName='DrawerNavigation'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
  );
};

export default UserStack;

