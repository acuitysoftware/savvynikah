//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatListCard from '../../Components/DrawerCard/ChatListCard';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const MyChat = () => {
    return (
        <View style={styles.container}>
            <View style={styles.noDataView}>
                <Image source={require('../../assets/images/nodata.png')} style={styles.nodataImg} />
            </View>
            {/*             
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(8)].map((_, index) => (
                    <ChatListCard key={index} />
                ))}
            </ScrollView> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noDataView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(20),
        marginTop: moderateScale(100)
    },

    nodataImg: {
        height: moderateScale(100),
        width: moderateScale(100),
        tintColor: 'green'
    }
});

//make this component available to the app
export default MyChat;
