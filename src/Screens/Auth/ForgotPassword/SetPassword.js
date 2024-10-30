//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppButton, AppTextInput, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../../Constants/PixelRatio';
import { FONTS } from '../../../Constants/Fonts';
import Header from '../../../Components/Header/Header';
import NavigationService from '../../../Services/Navigation';
import { useRoute } from '@react-navigation/native';

// create a component
const SetPassword = () => {
    const colors = useTheme()
    const route = useRoute()
    const AllOTPData = route.params.OTPData
    console.log('redddddddddddddddddddddddddddddddooooo77777777777777777777', AllOTPData);
    return (
        <View style={styles.container}>
              <Header title='Forgot Password' />
            
            <Text style={{ ...styles.input_title, color: colors.light_txt }}>New Password</Text>
            <AppTextInput
                inputContainerStyle={{ ...styles.inputcontainer_sty }}
                inputStyle={{ ...styles.text_input, color: colors.secondaryFontColor }}
            />
            <Text style={{ ...styles.input_title, color: colors.light_txt }}>Confirm New Password</Text>
            <AppTextInput
                inputContainerStyle={{ ...styles.inputcontainer_sty }}
                inputStyle={{ ...styles.text_input, color: colors.secondaryFontColor }}
            />

            <AppButton
                textStyle={styles.buttn_txt}
                style={styles.button_sty}
                title="Submit"
                gradientStart={{ x: 0.3, y: 1 }}
                gradientEnd={{ x: 1, y: 1 }}
                gradient={true}
                gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
            onPress={() => NavigationService.navigate('Login')}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input_title: {
        fontSize: moderateScale(12),
        fontFamily: FONTS.Inter.semibold,
        marginTop: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    inputcontainer_sty: {
        borderWidth: 0,
        alignSelf: 'center',
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        paddingLeft: moderateScale(7),
        marginHorizontal: moderateScale(15)
    },
    text_input: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(12)
    },
    buttn_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(14)
    },
    button_sty: {
        height: moderateScale(42),
        width: moderateScale(180),
        borderRadius: moderateScale(7),
        alignSelf: 'center',
        marginTop: moderateScale(40)
    }
});

//make this component available to the app
export default SetPassword;
