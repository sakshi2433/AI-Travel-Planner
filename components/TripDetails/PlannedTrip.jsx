import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceCard from './PlaceCard';

export default function PlannedTrip({itinerary}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,

      }}>🏕️ Plan Details</Text>


    {Object.entries(itinerary).map(([day,places])=>(
        <View key={day}>
            <Text style={{
              fontFamily:'outfit-bold',
              fontSize:25,
              marginTop:20,

            }}>{day.charAt(0).toUpperCase()+day.slice(1)}</Text>
            {places.places.map((place,index)=>(
              <PlaceCard place={place} key={index}/>
            ))}
        </View>
    ))}

    </View>
  )
}