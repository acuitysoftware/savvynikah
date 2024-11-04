//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ChatListCard from '../../Components/DrawerCard/ChatListCard';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import HomeService from '../../Services/HomeServises';
import { useTheme } from 'react-native-basic-elements';

// create a component
const MyChat = () => {
    const colors = useTheme();
    const [loading, setLoading] = useState(true);
    const [ProfileListData, setProfileListData] = useState([]);
    useEffect(() => {
        getUsetData()
    }, [])

    const getUsetData = (() => {
        let data = {
            "gender": null,
            "marital_status": null,
            "education_id": null,
            "occupation_id": null,
            "min_height": null,
            "max_height": null,
            "min_age": null,
            "max_age": null,
            "caste": null
        };
        // console.log('filllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll+++++++++++++++++++++++++++', data);

        HomeService.getuserListNdFilterData(data)
            .then((res) => {
                // console.log('gettttttttttttttttttttttttttttttttttttttttttttttt0000000000000000000000000ttttt',JSON.stringify(res));
                if (res && res.success == true) {
                    setProfileListData(res.data)
                }
            })
            .catch((err) => {
                console.log('errrrrhomrlist', err);

            })
            .finally(() => {
                setLoading(false);
            });
    })

    return (
        <View style={styles.container}>


            <View>
                {loading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                ) : (
                    <View>

                        {
                            ProfileListData?.length > 0 ?
                                <View style={{ ...styles.Main_list_view, backgroundColor: colors.primaryFontColor }}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {ProfileListData.map((item, index) => (
                                            <ChatListCard item={item} index={index} />
                                        ))}
                                    </ScrollView>



                                </View>
                                :
                                <View style={styles.noDataView}>
                                    <Image source={require('../../assets/images/nodata.png')} style={styles.nodataImg} />
                                </View>
                        }


                    </View>
                )}

            </View>
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
