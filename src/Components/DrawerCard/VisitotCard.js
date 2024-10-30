//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const VisitorCard = () => {
    const colors = useTheme();
    return (
        <Card style={styles.container}>
          <Image source={require('../../assets/images/6dc01.png')} style={styles.user_img}/>
          <View style={{marginLeft:moderateScale(10)}}>
            <Text style={{...styles.user_name,color:colors.secondaryFontColor}}>Jhon Doe</Text>
            <View style={{flexDirection:'row'}}>
            <Text numberOfLines={1} style={{...styles.devloper_txt,color:colors.light_txt}}>Software Devloper</Text>
            <Text style={{...styles.age_txt,color:colors.light_txt,}}> 22 years</Text>
            <Text style={{...styles.age_txt,color:colors.light_txt}}> 5ft 2in</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{...styles.age_txt,color:colors.light_txt}}>Khatri - Hindu </Text>
            <Text style={{...styles.age_txt,color:colors.light_txt}}>Delhi - India</Text>
            </View>
           
            
          </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderRadius:moderateScale(7),
        marginTop:moderateScale(10),
        marginHorizontal:moderateScale(10)
    },
    user_img:{
        height:moderateScale(65),
        width:moderateScale(65),
        borderRadius:moderateScale(40),
        resizeMode:'contain'
    },
    user_name:{
        fontFamily:FONTS.Inter.semibold,
        fontSize:moderateScale(14)
    },
    devloper_txt:{
        fontFamily:FONTS.Inter.regular,
        fontSize:moderateScale(12),
        maxWidth:'50%'
    },
    age_txt:{
        fontFamily:FONTS.Inter.regular,
        fontSize:moderateScale(12)
    }
});

//make this component available to the app
export default VisitorCard;
