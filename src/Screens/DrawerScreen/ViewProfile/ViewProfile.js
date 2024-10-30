import React, { useState } from 'react';
import { Dimensions, Image, Pressable, View, Text, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { moderateScale } from '../../../Constants/PixelRatio';
import { useTheme } from 'react-native-basic-elements';
import PresonalInfoCard from '../../../Components/ProfileCard/PresonalInfoCard';
import PreferencesCard from '../../../Components/ProfileCard/PreferencesCard';
import ProfessionalInfoCard from '../../../Components/ProfileCard/ProfessionalInfoCard';
import { FONTS } from '../../../Constants/Fonts';
import { ScrollView } from 'react-native';

const { height, width } = Dimensions.get('screen');

const ViewProfile = () => {
    const [selectScreen, setSelectScreen] = useState('PresonalInfo');
    const colors = useTheme();

    const profileData = [
        { profile: require('../../../assets/images/banner1.jpg') },
        { profile: require('../../../assets/images/banner2.jpg') },
        { profile: require('../../../assets/images/banner3.jpg') },
        { profile: require('../../../assets/images/banner4.jpg') },
    ];

    const renderContentScreen = () => {
        switch (selectScreen) {
            case 'PresonalInfo':
                return <PresonalInfoCard />;
            case 'Preferences':
                return <PreferencesCard />;
            case 'ProfessionalInfo':
                return <ProfessionalInfoCard />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: height / 4.2 }}>
                <SwiperFlatList
                    showPagination
                    paginationStyle={styles.paginationStyle}
                    paginationStyleItemActive={{
                        ...styles.paginationItem,
                        backgroundColor: colors.buttonColor,
                    }}
                    paginationStyleItemInactive={{
                        ...styles.paginationItem,
                        backgroundColor: colors.shadowColor,
                    }}
                    data={profileData}
                    renderItem={({ item }) => (
                        <View style={{ height: height / 2.7 }}>
                            <Image source={item.profile} style={styles.bannerImg} />
                        </View>
                    )}
                />
            </View>
            <View style={[styles.tabView, { backgroundColor: colors.shadowColor }]}>
                {['PresonalInfo', 'Preferences', 'ProfessionalInfo'].map((screen) => (
                    <Pressable
                        key={screen}
                        style={[
                            styles.tabScreenView,
                            { backgroundColor: selectScreen === screen ? colors.buttonColor : colors.shadowColor },
                        ]}
                        onPress={() => setSelectScreen(screen)}
                    >
                        <Text
                            style={[
                                styles.screenText,
                                { color: selectScreen === screen ? colors.primaryFontColor : colors.secondaryFontColor },
                            ]}
                        >
                            {screen}
                        </Text>
                    </Pressable>
                ))}
            </View>
            {renderContentScreen()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bannerImg: {
        height: moderateScale(170),
        width: width - moderateScale(30),
        borderRadius: moderateScale(20),
        marginTop: moderateScale(10),
        resizeMode: 'cover',
        marginRight: moderateScale(10),
    },
    tabView: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(15),
        padding:moderateScale(3),
        borderRadius: moderateScale(20),
        justifyContent: 'space-between',
        marginBottom:moderateScale(15)
    },
    tabScreenView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(10),
    },
    screenText: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(13),
    },
    paginationStyle: {
        bottom: moderateScale(0),
    },
    paginationItem: {
        height: moderateScale(6),
        width: moderateScale(6),
        borderRadius: moderateScale(7),
        marginHorizontal: moderateScale(3),
    },
});

export default ViewProfile;
