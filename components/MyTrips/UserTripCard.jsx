import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';


export default function UserTripCard({trip}) {
const formatData=(data)=>{
return JSON.parse(data);
}

    return (
    <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }}>
      {/* <Image source={require('./../../assets/images/earth.jpeg')}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
      /> */}

      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
              +formatData(trip.tripData).locationInfo?.photoRef
              +'&key='+'AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss'}}
              style={{
                width:100,
                height:100,
                borderRadius:15
              }} 
              />
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:18
        }}>{trip.tripPlan?.location}
        </Text >
        <Text style={{
            fontFamily:'outfit',
            fontSize:14,
            color:'gray'
        }}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:14,
            color:'gray'
        }}>Travelling: {formatData(trip.tripData).traveler.title}</Text>
      </View>
    </View>
  )
}