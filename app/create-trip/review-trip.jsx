import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';



export default function ReviewTrip() {

const navigation=useNavigation();
const {tripData,setTripData}=useContext(CreateTripContext);
const router=useRouter();

useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
    headerTransparent:true,
    headerTitle:''
    })
},[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Review your Trip</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            color:'gray',
            fontFamily:'outfit',
            fontSize:18
        }}>Before generating your trip, please review your trip.</Text>
      </View>

        {/* destination info */}
      <View style={{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      {/* <Ionicons name="location-outline" size={34} color="black" /> */}
      <Text style={{
        fontSize:30
      }}>📍</Text>
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:'gray'
        }}>Destination</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{tripData?.locationInfo?.name}</Text>
      </View>
      </View>

        {/* date select info */}
      <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      {/* <Ionicons name="location-outline" size={34} color="black" /> */}
      <Text style={{
        fontSize:30
      }}>🗓️</Text>
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:'gray'
        }}>Travel Dates</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{moment(tripData?.startDate).format('DD MMM')+" To "+moment(tripData?.endDate).format('DD MMM')+"  "}
        ({tripData?.totalNoOfDays} days)</Text>
      </View>
      </View>


        {/* traveler info  */}
      <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      {/* <Ionicons name="location-outline" size={34} color="black" /> */}
      <Text style={{
        fontSize:30
      }}>🚌</Text>
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:'gray'
        }}>Who's Travelling?</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{tripData?.traveler?.title}</Text>
      </View>
      </View>
     
      {/* budget info */}
      <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      {/* <Ionicons name="location-outline" size={34} color="black" /> */}
      <Text style={{
        fontSize:30
      }}>💰</Text>
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:'gray'
        }}>Budget</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{tripData?.budget}</Text>
      </View>
      </View>

      <TouchableOpacity
       onPress={()=>router.replace('/create-trip/generate-trip')}
      style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:20,
        marginTop:40
      }}>
        
        <Text style={{
            color:'white',
            fontFamily:'outfit-medium',
            textAlign:'center',
            fontSize:20

        }}>Build my Trip</Text>
      </TouchableOpacity>
    </View>
  )
}