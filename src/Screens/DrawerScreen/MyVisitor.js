//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import VisitorCard from '../../Components/DrawerCard/VisitotCard';

// create a component
const MyVisitor = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(8)].map((_, index) => (
                    <VisitorCard key={index} />
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
export default MyVisitor;
