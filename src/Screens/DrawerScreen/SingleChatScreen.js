//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppTextInput, Icon, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import Resiver from '../../Components/ChatComponent/Resiver';
import Sender from '../../Components/ChatComponent/Sender';

// create a component
const SingleChatScreen = () => {
    const colors = useTheme();

    const chatData = [
        {
            text: 'Hi Kawsar, I am cardio patient. I need your help imidiately.',
            type: 'resiver'
        },
        {
            text: 'Hi, don’t worry! I am here. Let me know your situation now.',
            type: 'sender'
        },
        {
            text: 'Hi Kawsar, I am cardio patient. I need your help imidiately.',
            type: 'resiver'
        },
        {
            text: 'Hi, don’t worry! I am here. Let me know your situation now.',
            type: 'sender'
        },
        {
            text: 'Hi, don’t worry! I am here. Let me know your situation now.',
            type: 'sender'
        },
        {
            text: 'Hi, don’t worry! I am here. Let me know your situation now.',
            type: 'sender'
        },
        {
            text: 'Hi Kawsar, I am cardio patient. I need your help imidiately.',
            type: 'resiver'
        }, {
            text: 'Hi Kawsar, I am cardio patient. I need your help imidiately.',
            type: 'resiver'
        }, {
            text: 'Hi Kawsar, I am cardio patient. I need your help imidiately.',
            type: 'resiver'
        },

    ]
    return (
        <View style={{ ...styles.container, backgroundColor: colors.chatScreen }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    chatData.map((item, index) => {
                        return (
                            <View>
                                {
                                    item.type === 'resiver' ?
                                        <Resiver key={index} item={item} />
                                        :
                                        item.type === 'sender' ?
                                            <Sender key={index} item={item} />
                                            :
                                            null

                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={{ ...styles.inputbox_view, backgroundColor: colors.chatScreen }}>
                <AppTextInput
                    inputContainerStyle={{ ...styles.inputcontainer_sty, backgroundColor: colors.secondaryThemeColor }}
                    inputStyle={{ ...styles.text_input, color: colors.secondaryFontColor }}
                    placeholder='Message'
                    placeholderTextColor={colors.secondaryFontColor}
                />
                <View style={{ ...styles.send_view, backgroundColor: colors.second_txt }}>
                    <Icon name='send' type='Ionicon' />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: moderateScale(70)
    },
    inputbox_view: {
        bottom: 15,
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
    inputcontainer_sty: {
        height: moderateScale(45),
        width: moderateScale(265),
        borderWidth: 0,
        borderRadius: moderateScale(25),
        paddingLeft: moderateScale(7)
    },
    text_input: {
        fontFamily: FONTS.Inter.medium,
        fontSize: moderateScale(12)
    },
    send_view: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(15)
    }
});

//make this component available to the app
export default SingleChatScreen;
