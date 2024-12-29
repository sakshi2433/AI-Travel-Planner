import { View, Text, TouchableOpacity, Linking } from 'react-native'
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
      }}>{flightData.airline}</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17
      }}>Price: {flightData.price}</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17
      }}>{flightData.departure_city}(at {flightData.departure_time})  ➤  {flightData.arrival_city}(at {flightData.arrival_time})</Text>

      <TouchableOpacity style={{
        backgroundColor:'black',
        padding:5,
        width:100,
        borderRadius:7,
        marginTop:7
      }} onPress={()=>{Linking.openURL(flightData.booking_url)}}><Text style={{
        color:'white',
        textAlign:'center'
      }}>Book Here</Text>
      </TouchableOpacity>
    </View>
  )
}