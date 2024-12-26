import 'react-native-get-random-values';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Login from './../components/Login';
import {auth} from './../configs/FirebaseConfig';
import { Link, Redirect } from 'expo-router';

export default function Index() {

    const user= auth.currentUser;

    return (
        <View style={{flex:1}}>
            {user?
          
        <Redirect href={"./(tabs)/mytrip.jsx"}/>:
        <Login />
        }
            
        </View>
    )
}