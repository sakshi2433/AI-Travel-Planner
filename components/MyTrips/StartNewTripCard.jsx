import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function StartNewTripCard() {

    const window=Dimensions.get('window');
  return (
    <View style={{
        padding:'window.height*0.02',
        display:'flex',
        alignItems:'center',
        gap:20
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontSize:15,
        fontFamily:'outfit-medium'
      }}>No Trips planned yet.</Text>

      <Text style={{
        fontSize:12,
        fontFamily:'outfit',
        textAlign:'center',
        color:'gray'
      }}>It's time to plan a new travel experience! Get Started now..
      </Text>

      <TouchableOpacity
      style={{padding:10,
        backgroundColor:'black',
        borderRadius:15,
        paddingHorizontal:20
      }}>
        <Text style={{color:'white',
            fontFamily:'outfit-bold',
            fontSize:15
        }}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}