//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AppButton, AppTextInput, Card, CheckBox, Icon, useTheme } from 'react-native-basic-elements';
import Header from '../../Components/Header/Header';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';
import AuthService from '../../Services/Auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from "react-native-simple-toast";

// create a component
const Login = ({ navigation }) => {
    const colors = useTheme()
    const [email, setEmail] = useState('')
    const [btnLoader, setBtnLoader] = useState(false);

    const getLogin = (() => {
        if (email === '') {
            Toast.show('Please enter Your Email');
            return;
        }
        let data = {
            "email": email,
        };
        setBtnLoader(true);
        console.log('resssssssssssdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
        AuthService.getlogin(data)
            .then((res) => {
                if (res && res.status === true) {
                    setBtnLoader(false);
                    Toast.show('An OTP has been sent to your verified email address.')
                    NavigationService.navigate('Otp',{getEmail:res?.data})
                   
                } else {
                    setBtnLoader(false);
                    Toast.show(res.message);
                }
            })
            .catch((err) => {
                console.log('emailverify==========================', err);
                setBtnLoader(false);
            });

    })

    return (
        <View style={styles.container}>
            <Header title='SignIn' />
            <KeyboardAwareScrollView>
                <Image source={require('../../assets/images/rickshaw.png')} style={styles.logoimg_sty} />
                <Card style={{ ...styles.card_sty, backgroundColor: colors.cardColor }}>
                    <Text style={{ ...styles.input_title, color: colors.secondaryFontColor }}>Enter Your Email Id</Text>
                    <View style={{ ...styles.phoneinput_view, borderColor: colors.borderColor }}>
                        <TextInput
                            style={{ ...styles.inputcontainer_sty, color: colors.secondaryFontColor }}
                            keyboardType='email-address'
                            placeholder='Email Id'
                            placeholderTextColor={colors.secondaryFontColor}
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>

                    {/* <View style={{ ...styles.bottom_view }}>
                    <View style={styles.check_view}>
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={18}
                            tintColor={colors.second_txt}
                            activeColor={'#fff'}
                            containerStyle={{ borderWidth: 1, borderColor: '#999' }}
                        />
                        <Text style={{ ...styles.rerember_txt, color: colors.secondaryFontColor }}>I Accept the Teems & Conditions</Text>
                    </View>
                </View> */}
                    <Text 
                    onPress={()=>NavigationService.navigate('ForgotEmail')}
                    style={{ ...styles.forgotpassward_txt, color: colors.secondaryFontColor }}>Forgot Password?</Text>
                    <AppButton
                        textStyle={styles.buttn_txt}
                        style={styles.button_sty}
                        title="SignIn"
                        gradientStart={{ x: 0.3, y: 1 }}
                        gradientEnd={{ x: 1, y: 1 }}
                        gradient={true}
                        gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
                        onPress={() => getLogin()}
                        loader={
                            btnLoader
                                ? {
                                    position: "right",
                                    color: "#fff",
                                    size: "small",
                                }
                                : null
                        }
                        disabled={btnLoader}
                    />

                    <TouchableOpacity onPress={() => NavigationService.navigate('Signup')}>
                        <Text style={{ ...styles.bottom_txt, color: colors.secondaryFontColor }}>Don’t have an account?
                            <Text style={styles.signup_txt}> Sign Up</Text></Text>
                    </TouchableOpacity>
                </Card>
            </KeyboardAwareScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoimg_sty: {
        height: moderateScale(190),
        width: moderateScale(220),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    card_sty: {
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(-29.7),
        paddingTop: moderateScale(25),
        paddingBottom: moderateScale(30),
        marginBottom: moderateScale(2)
    },
    input_title: {
        fontSize: moderateScale(12),
        fontFamily: FONTS.Inter.semibold,
    },
    forgotpassward_txt: {
        fontSize: moderateScale(12),
        fontFamily: FONTS.Inter.semibold,
        textAlign: 'right',
        marginTop: moderateScale(7)
    },
    phoneinput_view: {
        height: moderateScale(45),
        borderRadius: moderateScale(7),
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScale(7)
    },
    inputcontainer_sty: {
        height: moderateScale(45),
        width: moderateScale(250),
        borderWidth: 0,
        alignSelf: 'center',
        marginTop: moderateScale(-1),
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(12)
    },
    text_input: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(12)
    },
    phonecode: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(12)
    },
    bottom_view: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        justifyContent: 'space-between'
    },
    check_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rerember_txt: {
        fontSize: moderateScale(12),
        fontFamily: FONTS.Inter.medium,
        marginLeft: moderateScale(10)
    },
    buttn_txt: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(15)
    },
    button_sty: {
        height: moderateScale(40),
        width: moderateScale(130),
        borderRadius: moderateScale(7),
        alignSelf: 'center',
        marginTop: moderateScale(25)
    },
    bottom_txt: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(13),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(25),
        textAlign: 'center',
    },
    signup_txt: {
        fontFamily: FONTS.Inter.semibold,
        fontSize: moderateScale(13),
        color: 'rgba(2,142,0,255)'
    }
});

//make this component available to the app
export default Login;
