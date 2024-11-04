//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { TouchableOpacity } from 'react-native';
import NavigationService from '../../Services/Navigation';
import { useSelector } from 'react-redux';

// create a component
const ChatListCard = ({ item, index }) => {
    const colors = useTheme();
    const { userData } = useSelector(state => state.User)
    console.log('itemmmmmmmmmmmmmchat', item);

    // onPress={() => navigation.navigate('ChatDetails', 
    //     {reciever_user_name: data.item.first_name,
    //         user: data.item,
    //          userId: userData.id, 
    //          recipientId: data.item.id, 
    //          UserName:  userData.name })} 

    return (
        <TouchableOpacity

            key={index}
            // onPress={() => NavigationService.navigate('SingleChatScreen', {
            //     reciever_user_name: item.first_name,
            //     user: item,
            //     userId: userData.id,
            //     recipientId: item.id,
            //     UserName: userData.name
            // })}
            style={{ ...styles.container, backgroundColor: colors.secondaryThemeColor }}>
            <Image
                source={item?.profile_images?.length > 0 && item.profile_images[0]?.url ?
                    { uri: item.profile_images[0].url } :
                    require('../../assets/images/user.png')}
                style={styles.user_img}
            />
            {/* <Image source={require('../../assets/images/6dc01.png')} style={styles.user_img}/> */}
            <View style={{ marginLeft: moderateScale(10) }}>
                <Text style={{ ...styles.user_name, color: colors.secondaryFontColor }}>{item.full_name}</Text>
                {/* <Text style={{...styles.message_txt,color:colors.light_txt}}>Hello</Text> */}

            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        padding: moderateScale(10),
        // paddingHorizontal: moderateScale(15)
    },
    user_img: {
        height: moderateScale(65),
        width: moderateScale(65),
        borderRadius: moderateScale(40),
        resizeMode: 'cover'
    },
    user_name: {
        fontFamily: FONTS.Inter.semibold,
        fontSize: moderateScale(14)
    },
    message_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12),
        marginTop: moderateScale(10)
    }
});

//make this component available to the app
export default ChatListCard;

