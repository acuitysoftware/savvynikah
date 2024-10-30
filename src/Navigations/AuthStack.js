//import liraries
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Splash from '../Screens/Auth/Splash';
import Otp from '../Screens/Auth/Otp';
import Signup from '../Screens/Auth/Signup';
import PresonalInfo from '../Screens/Auth/RegProfile/PresonalInfo';
import ProfessionalInfo from '../Screens/Auth/RegProfile/ProfessionalInfo';
import OtherInfo from '../Screens/Auth/RegProfile/OtherInfo';
import Congrats from '../Screens/Auth/Congrats';
import Login from '../Screens/Auth/Login';
import EmailVerify from '../Screens/Auth/EmailVerify';
import ForgotEmail from '../Screens/Auth/ForgotPassword/ForgotEmail';
import ForgotOTP from '../Screens/Auth/ForgotPassword/ForgotOTP';
import SetPassword from '../Screens/Auth/ForgotPassword/SetPassword';


const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
           <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Otp" component={Otp} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="EmailVerify" component={EmailVerify} />

              <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
              <Stack.Screen name="ForgotOTP" component={ForgotOTP} />
              <Stack.Screen name="SetPassword" component={SetPassword} />

              <Stack.Screen name="PresonalInfo" component={PresonalInfo} />
              <Stack.Screen name="ProfessionalInfo" component={ProfessionalInfo} />
              <Stack.Screen name="OtherInfo" component={OtherInfo} />
              <Stack.Screen name="Congrats" component={Congrats} />

        </Stack.Navigator>
    );
};

export default AuthStack;
