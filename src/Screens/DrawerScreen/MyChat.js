//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatListCard from '../../Components/DrawerCard/ChatListCard';
import { ScrollView } from 'react-native';

// create a component
const MyChat = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(8)].map((_, index) => (
                    <ChatListCard key={index} />
                ))}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default MyChat;
