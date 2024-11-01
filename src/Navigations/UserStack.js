import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import OtherInfo from '../Screens/DrawerScreen/EditMyProfile/OtherInfo';
import PresonalInfo from '../Screens/DrawerScreen/EditMyProfile/PresonalInfo';
import ProfessionalInfo from '../Screens/DrawerScreen/EditMyProfile/ProfessionalInfo';

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
            <Stack.Screen name="PresonalInfo" component={PresonalInfo} />
            <Stack.Screen name="ProfessionalInfo" component={ProfessionalInfo} />
            <Stack.Screen name="OtherInfo" component={OtherInfo} />
        </Stack.Navigator>
  );
};

export default UserStack;

