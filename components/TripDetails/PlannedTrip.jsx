import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceCard from './PlaceCard';

export default function PlannedTrip({details}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,

      }}>🏕️ Plan Details</Text>


    {Object.entries(details).reverse().map(([day,details])=>(
        <View>
            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              marginTop:20,

            }}>{day.charAt(0).toUpperCase()+day.slice(1)}</Text>
            {details.plan.map((place,index)=>(
              <PlaceCard place={place}/>
            ))}
        </View>
    ))}

    </View>
  )
}