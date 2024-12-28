import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

export default function HotelList(hotelList) {
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
        <View style={{
            marginRight:15,
            width:180
        }}>
            <Image source={require('./../../assets/images/earth.jpeg')}
            style={{
                width:180,
                height:120,
                borderRadius:15
            }}
            />
<View> 
   <Text style={{
    fontFamily:'outfit-medium',
    fontSize:17
   }}>{item.hotel_name}</Text> 

   <View>
    <Text style={{
        fontFamily:'outfit'
    }}>★ {item.rating}</Text>

<Text style={{
        fontFamily:'outfit'
    }}>💰 {item.price_per_night}</Text>
   </View>
</View>
            </View>
      )}/>
    </View>
  )
}