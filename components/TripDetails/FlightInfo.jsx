import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FlightInfo({flightData}) {
  return (
    <View style={{
        marginTop:20,
        borderWidth:1,
        borderColor:'gray',
        padding:10,
        borderRadius:15

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>✈️ Flights</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17,
        marginTop:7
      }}>Airline:Delta</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17
      }}>Price: {flightData.example_flight.price}</Text>

      <TouchableOpacity style={{
        backgroundColor:'black',
        padding:5,
        width:100,
        borderRadius:7,
        marginTop:7
      }}>Book Here
      </TouchableOpacity>
    </View>
  )
}