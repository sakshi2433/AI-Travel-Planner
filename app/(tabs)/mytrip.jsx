import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {

  const window = Dimensions.get('window');

  const [userTrips,setUserTrips]=useState();

  return (
    <View style={{
      backgroundColor:'white',
      height:'window.height'
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>My Trips</Text>
      <Ionicons name="add-circle-outline" size={48} color="black" />
      </View>

      {userTrips?.length==0?
      <StartNewTripCard/>
      :null}
    </View>
  )
}