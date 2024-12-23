import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Login from './../components/Login';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';

export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Login />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});