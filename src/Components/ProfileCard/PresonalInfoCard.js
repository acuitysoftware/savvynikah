import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { useTheme } from 'react-native-basic-elements';

const { height, width } = Dimensions.get('screen');
const PresonalInfoCard = () => {
    const colors = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.Presonal_txt, color: colors.secondaryFontColor }}>Presonal Information</Text>

            <Text
                numberOfLines={isExpanded ? undefined : 5}
                style={{ ...styles.Presonal_details_txt }}
            >
                This package doesn't integrate with React Navigation. If you want to integrate the tab view with React Navigation's navigation system, e.g. want to show screens in the tab bar and be able to navigate between them using navigation.navigate etc, use Material Top Tab Navigator instead.
            </Text>

            <Pressable onPress={() => setIsExpanded(!isExpanded)}>
                <Text style={{ ...styles.toggleText, color: colors.secondaryFontColor }}>
                    {isExpanded ? 'See Less' : 'See More'}
                </Text>
            </Pressable>
            <Text style={{
                ...styles.Presonal_txt,
                marginTop: moderateScale(10),
                color: colors.secondaryFontColor
            }}>Basic Details</Text>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Name</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>Jhon Doe</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Age</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>25 Years</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Gender</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>Male</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Height</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>5ft 7in</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Weight</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>67 kg</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Status</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>Single</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>Language</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>Hindi,English</Text>
            </View>
            <View style={styles.name_view}>
                <Text style={{ ...styles.name_txt, color: colors.light_txt }}>DOB</Text>
                <Text style={{ ...styles.username_txt, color: colors.secondaryFontColor }}>17 May 2002</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(15),
    },
    Presonal_txt: {
        fontFamily: FONTS.Inter.semibold,
        fontSize: moderateScale(14),
    },
    Presonal_details_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(13),
    },
    toggleText: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12),
    },
    name_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: moderateScale(7),
        paddingBottom: moderateScale(5),
        width: width - moderateScale(120),
    },
    name_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12)
    },
    username_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12),
        textAlign:'right'
    },
});

export default PresonalInfoCard;
