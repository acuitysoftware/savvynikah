import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { AppButton, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import SubscriptionCard from '../../Components/DrawerCard/SubscriptionCard';
import { useNavigation } from '@react-navigation/native';
import HomeService from '../../Services/HomeServises';
import RazorpayCheckout from 'react-native-razorpay';
import uuid from 'react-native-uuid';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get('screen');

const GetPremium = () => {
    const { userData } = useSelector(state => state.User)
    const colors = useTheme();
    const navigation = useNavigation();
    const [selectedPlan, setSelectedPlan] = useState(null);
    console.log('hgggggggggggggggggggg',selectedPlan);
    const [subPlanList, setSubPlanList] = useState([])
    
    const [loading, setLoading] = useState(true);

   

    const handlePlanSelect = (index) => {
        setSelectedPlan(index);
    };

  

    useEffect(() => {
        getSubscriptionLise()
    }, [])
    

    const getSubscriptionLise = () => {
        HomeService.getSubscriptionList()
            .then((res) => {
                console.log('ddddddsssssssssssssssssss00000000000', res);

                if (res && res.status == true) {
                    setSubPlanList(res.data)
                }
            })
            .catch((err) => {
                console.log('homeerrr', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const Setpayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: '../../assets/images/paymentlog.png',
            currency: 'INR',
            key: 'rzp_test_BTKOTgmenSECJo',
            amount: Number(selectedPlan.price) * 100,
            name: 'SavvyNikah',
            order_id: '',
            prefill: {
                email: userData?.email,
                contact: userData?.phone,
                name:  userData?.full_name
            },
            theme: { color: 'rgba(30,68,28,255)' }
        }
        RazorpayCheckout.open(options).then((data) => {
            console.log('paymentIDDDDD-------------------------', data.razorpay_payment_id);
            let uuidCustom = uuid.v4();
            let traRef = uuidCustom.split('-');
            let Paymentdata = {
                "subscription_id": "2",
                "transaction_id": `${traRef[0]}-${traRef[1]}-${traRef[2]}`,
                "order_id": "jhfdfjffjk"
            }
            console.log('data1--------------===================', Paymentdata);
            if (data.razorpay_payment_id) {
                HomeService.getSubscriptionPayment(Paymentdata).then((res) => {
                    console.log('res------------------', res);
                    // Toast.show('Price Update Success')
                    // NavigationService.back()
                })
            }
        }).catch((error) => {
            // alert(`Error: ${error.code} | ${error.description}`);
        });
    }



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
                {loading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="rgba(2,142,0,255)" />
                    </View>
                ) : (
                    <View>
                        {subPlanList.map((item, index) => (
                            <SubscriptionCard
                                item={item}
                                index={index}
                                key={index}
                                onSelect={handlePlanSelect}
                                selectedPlan={selectedPlan}
                            />
                        ))}
                    </View>
                )}
                <AppButton
                    textStyle={styles.buttn_txt}
                    style={styles.button_sty}
                    title="Pay Now"
                    gradientStart={{ x: 0.3, y: 1 }}
                    gradientEnd={{ x: 1, y: 1 }}
                    gradient={true}
                    gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
                    onPress={()=>Setpayment()}
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
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: moderateScale(11),
        marginBottom: moderateScale(15)
    }
});

export default GetPremium;
