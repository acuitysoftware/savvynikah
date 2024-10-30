//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubscriptionCard from '../../Components/DrawerCard/SubscriptionCard';

// create a component
const MySubscription = () => {
    const subPlanDetails = [
        { plan_time: '6 Months Plan', price: '599', status: true },
        { plan_time: '3 Months Plan', price: '399', status: false },
    ];
    return (
        <View style={styles.container}>
            {subPlanDetails.map((item, index) => (
                <SubscriptionCard
                    item={item}
                    index={index}
                    key={index}
                />
            ))}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default MySubscription;
