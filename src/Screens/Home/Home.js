//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable, Animated, TouchableOpacity } from 'react-native';
import HomeHeader from '../../Components/Header/HomeHeader';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { useTheme } from 'react-native-basic-elements';
import ProfileListCard from '../../Components/HomeCard/ProfileListCard';
import Modal from "react-native-modal";
import FilterCard from '../../Components/HomeCard/FilterCard';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get('screen')
const Home = () => {

    const { userData } = useSelector(state => state.User)
    console.log('userdata---------------home--------------------', userData);
    const colors = useTheme();
    const [isModalVisible, setModalVisible] = useState(false);
    const modalAnimation = useRef(new Animated.Value(0)).current;

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

        Animated.timing(modalAnimation, {
            toValue: isModalVisible ? 1 : 2,
            duration: 0.10,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            {/* <HomeHeader /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require('../../assets/images/homeBannerBack.jpg')}
                    style={styles.Homebanner_img}>
                    <View style={styles.main_view}>
                        <Text style={{ ...styles.title_txt, color: colors.primaryFontColor }}>Find Your Best Partner</Text>
                    </View>
                </ImageBackground>
                <View style={{ ...styles.secondary_view, backgroundColor: colors.second_txt }}>
                    <View style={styles.search_view}>
                        <Text style={{ ...styles.search_txt, color: colors.primaryFontColor }}>search For Partner</Text>
                        <Pressable onPress={toggleModal} style={styles.filter_view}>
                            <Image source={require('../../assets/images/filter.png')} style={styles.filter_img} />
                        </Pressable>
                    </View>

                    <View style={{ ...styles.Main_list_view, backgroundColor: colors.primaryFontColor }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {[...Array(8)].map((_, index) => (
                                <ProfileListCard key={index} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>



            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                backdropOpacity={0.5}
                style={{ margin: 0, justifyContent: 'flex-end', marginTop: 0, }}
            >
                <View style={{ ...styles.modalView, backgroundColor: colors.buttonColor }}>
                    <Text style={{ ...styles.filter_title, color: colors.primaryFontColor }}>Filter by Your Preferences</Text>
                    <FilterCard setModalVisible={setModalVisible} />
                    <View style={styles.modal_bottom_view}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{ ...styles.cancle_btn, borderColor: colors.primaryFontColor }}>
                            <Text style={{ ...styles.canclebtn_txt, color: colors.primaryFontColor }}>Cancle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.save_btn, backgroundColor: colors.primaryFontColor }}>
                            <Text style={{ ...styles.canclebtn_txt, color: colors.primaryThemeColor }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Homebanner_img: {
        height: height / 3.3,
        width: width
    },
    main_view: {
        height: height / 3.3,
        width: width,
        backgroundColor: 'rgba(2, 21, 38,0.7)'
    },
    Main_list_view: {
        height: height,
        width: width,
        marginTop: moderateScale(15),
        borderTopLeftRadius: moderateScale(13),
        borderTopRightRadius: moderateScale(13)
    },
    title_txt: {
        fontFamily: FONTS.Inter.bold,
        fontSize: moderateScale(25),
        marginTop: moderateScale(50),
        marginHorizontal: moderateScale(15),
        maxWidth: '60%',
    },
    secondary_view: {
        height: height,
        width: width,
        marginTop: moderateScale(-100),
        borderTopLeftRadius: moderateScale(13),
        borderTopRightRadius: moderateScale(13)
    },
    search_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        alignItems: 'center',
        marginTop: moderateScale(15)
    },
    filter_view: {
        height: moderateScale(25),
        width: moderateScale(25),
        borderRadius: moderateScale(4),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filter_img: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    search_txt: {
        fontFamily: FONTS.Inter.bold,
        fontSize: moderateScale(14)
    },
    modalView: {
        padding: moderateScale(15),
        alignSelf: 'center',
        height: height / 1.3,
        width: width,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20)
    },
    filter_title: {
        fontFamily: FONTS.Inter.bold,
        fontSize: moderateScale(14),
        textAlign: 'center'
    },
    modal_bottom_view: {
        height: moderateScale(45),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancle_btn: {
        height: moderateScale(50),
        width: moderateScale(130),
        borderWidth: 1,
        borderRadius: moderateScale(7),
        alignItems: 'center',
        justifyContent: 'center'
    },
    canclebtn_txt: {
        fontFamily: FONTS.Inter.bold,
        fontSize: moderateScale(15),
    },
    save_btn: {
        height: moderateScale(50),
        width: moderateScale(130),
        borderRadius: moderateScale(7),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Home;
