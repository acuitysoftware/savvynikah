
//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import WishlistCard from '../../Components/DrawerCard/WishlistCard';

// create a component
const MyWishlist = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(8)].map((_, index) => (
                    <WishlistCard key={index} />
                ))}
            </ScrollView>
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
export default MyWishlist;
