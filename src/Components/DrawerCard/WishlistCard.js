//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { AppButton, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const WishlistCard = () => {
    const colors = useTheme();
    return (
        <View style={{...styles.container,backgroundColor:colors.primaryFontColor}}>
          <View style={{
            position:'absolute',
            right:moderateScale(8),
            top:moderateScale(7)
          }}>
          <Icon name='heart' type='AntDesign' color={'red'} size={12}/>
          </View>
   
          <Image source={require('../../assets/images/6dc01.png')} style={styles.user_img}/>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginLeft:moderateScale(7),
            flex:1
          }}>
            <View>
                <Text style={styles.usr_name}>Jhon Doe</Text>
                <Text style={styles.occupation}>Doctor</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <Text style={{...styles.usr_name,color:colors.buttonColor}}>24 <Text style={styles.occupation}>Years</Text></Text>
            <AppButton
              textStyle={styles.buttn_txt}
              style={styles.button_sty}
              title="View Profile"
              gradientStart={{ x: 0.3, y: 1 }}
              gradientEnd={{ x: 1, y: 1 }}
              gradient={true}
              gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
            />
            </View>
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       padding:moderateScale(10),
       marginHorizontal:moderateScale(15),
       marginTop:moderateScale(10),
       borderRadius:moderateScale(7),
       elevation:1,
       flexDirection:'row',
       alignItems:'center'
    },
    user_img:{
        height:moderateScale(60),
        width:moderateScale(60),
        borderRadius:moderateScale(40)
    },
    usr_name:{
        fontFamily:FONTS.Inter.bold,
        fontSize:moderateScale(13),
        color:'#000'
    },
    occupation:{
        fontFamily:FONTS.Inter.regular,
        fontSize:moderateScale(10),
        color:'#000'
    },
    buttn_txt: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(10)
      },
      button_sty: {
        height: moderateScale(26),
        width: moderateScale(80),
        borderRadius: moderateScale(7),
        marginHorizontal:0,
        marginTop:moderateScale(5)
      },
});

//make this component available to the app
export default WishlistCard;
