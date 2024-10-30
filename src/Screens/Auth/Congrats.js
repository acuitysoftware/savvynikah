//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from '../../Components/Header/Header';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { ImageBackground } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { useTheme } from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';


const { height, width } = Dimensions.get('screen')
// create a component
const Congrats = () => {
    const colors = useTheme();
    useEffect(() => {
        setTimeout(() => {
            NavigationService.navigate('UserStack');
        }, 2000);

    }, []);
    return (
        <View style={styles.container}>
            <Header title='Congratulate' />
            <ImageBackground
                source={require('../../assets/images/sucessback.png')}
                style={styles.main_banner}>
                <View>
                    <Image source={require('../../assets/images/sucess.png')} style={styles.banner_img} />
                    <Text style={{...styles.Congrats_txt, color:colors.secondaryFontColor}}>CONGRATULATE</Text>
                    <Text style={{...styles.Congrats_txt, color:colors.secondaryFontColor}}>REGISTATION SUCESSFULLY SUBMITED</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main_banner: {
        height: height,
        width: width
    },
    banner_img: {
        height: moderateScale(240),
        width: width,
        resizeMode: 'contain'
    },
    Congrats_txt:{
        fontFamily:FONTS.Inter.semibold,
        fontSize:moderateScale(14),
        textAlign:'center',
    }
});

//make this component available to the app
export default Congrats;