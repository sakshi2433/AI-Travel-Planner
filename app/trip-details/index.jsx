import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'


export default function TripDetails() {
const navigation=useNavigation();
const {trip}=useLocalSearchParams();
const [tripDetails,setTripDetails]=useState([])


const formatData=(data)=>{
  return JSON.parse(data);
  }

useEffect(()=>{
  navigation.setOptions({
    headerShown:true,
    headerTransparent:true,
    headerTitle:''
  });

  setTripDetails(JSON.parse(trip))
},[])


  return tripDetails&&(
    <View>
      <Image source={{uri:
      'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
              +formatData(tripDetails?.tripData).locationInfo?.photoRef
              +'&key='+'AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss'}}
              style={{
                width:'100%',
                height:400,
                borderRadius:15
              }} 
              />
    </View>
  )
}