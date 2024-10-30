import React, { useState } from 'react';
import { Image, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { AppButton, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import SubscriptionCard from '../../Components/DrawerCard/SubscriptionCard';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('screen');

const GetPremium = () => {
    const colors = useTheme();
    const navigation = useNavigation();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const subPlanDetails = [
        { plan_time: '6 Months Plan', price: '599', status: true },
        { plan_time: '3 Months Plan', price: '399', status: false },
    ];

    const handlePlanSelect = (index) => {
        setSelectedPlan(index);
    };

    const handleSubmit = () => {
        if (selectedPlan !== null) {
            const selectedPlanDetails = subPlanDetails[selectedPlan];
            navigation.navigate('PaymentSucess', { selectedPlanDetails });
        } else {
            console.log ('Please select a plan');;
           
        }
    };            

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ ...styles.title_txt, color: colors.secondaryFontColor }}>Get Premium</Text>
                <Text numberOfLines={2} style={{ ...styles.details_txt, color: colors.secondaryFontColor }}>
                    Unlock all the power of this mobile tool and enjoy digital experience like never before!
                </Text>
                <Image
                    source={require('../../assets/images/getpremium.png')}
                    style={styles.getpremium_img}
                />
                {subPlanDetails.map((item, index) => (
                    <SubscriptionCard
                        item={item}
                        index={index}
                        key={index}
                        onSelect={handlePlanSelect}
                        selectedPlan={selectedPlan}
                    />
                ))}
                <AppButton
                    textStyle={styles.buttn_txt}
                    style={styles.button_sty}
                    title="Pay Now"
                    gradientStart={{ x: 0.3, y: 1 }}
                    gradientEnd={{ x: 1, y: 1 }}
                    gradient={true}
                    gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
                    onPress={handleSubmit}
                />
                <Text style={{ ...styles.bottom_txt, color: colors.secondaryFontColor }}>
                    By Placing this order, you agree to the Terms of Service and Privacy Policy. Subscription Automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    title_txt: {
        fontFamily: FONTS.Inter.bold,
        fontSize: moderateScale(25),
        textAlign: 'center',
        marginTop: moderateScale(15)
    },
    details_txt: {
        textAlign: 'center',
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(10),
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12)
    },
    getpremium_img: {
        height: moderateScale(220),
        width: width,
        resizeMode: 'contain',
        marginTop: moderateScale(10)
    },
    buttn_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(14)
    },
    button_sty: {
        height: moderateScale(40),
        width: moderateScale(150),
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(40)
    },
    bottom_txt: {
        textAlign: 'center',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15),
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(11)
    }
});

export default GetPremium;
