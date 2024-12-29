import { View, Text, FlatList,Image } from 'react-native'
import React, { useEffect } from 'react'
import { GetPhotoRef } from '../../services/GooglePlacesApi'
import HotelCard from './HotelCard';

export default function HotelList({hotelList}) {




  console.log(hotelList);

  return (
    <View style={{
        marginTop:20,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>🏨 Hotel Recommendations</Text>

      <FlatList 
      style={{
        marginTop:8
      }}
      data={hotelList}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item,index})=>(
        <HotelCard item={item} key={index}/>
      )}/>
    </View>
  )
}