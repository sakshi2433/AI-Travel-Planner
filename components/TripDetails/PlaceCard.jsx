import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GetPhotoRef } from '../../services/GooglePlacesApi';

export default function PlaceCard({place}) {



     const [photoRef,setPhotoRef]=useState();

    useEffect(()=>{
        GetGooglePhotoRef();
    },[])

    const GetGooglePhotoRef=async()=>{
const result=await GetPhotoRef(place.placeName);
setPhotoRef(result);
}
  return (
    <View style={{
        backgroundColor:'light blue',
        padding:10,
        borderRadius:15,
        borderColor:'gray',
        marginTop:20,

      }}>
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +photoRef+'&key='+'AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss'}}
        style={{
          width:'100%',
          height:140,
          borderRadius:15
        }}
        />
        <View style={{
            marginTop:5
        }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20
        }}>{place?.place_name}</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:14,
          color:'gray'
        }}>{place?.place_details}</Text>
        <View style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
        <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:17,
          marginTop:5
        }}>🎟️ Ticket Price: 
        <Text style={{
          fontFamily:'outfit-bold'
        }}>{place?.price_per_night}</Text></Text>

<Text style={{
          fontFamily:'outfit',
          fontSize:17,
          marginTop:5
        }}>⏱️ Time to Travel: 
        <Text style={{
          fontFamily:'outfit-bold'
        }}>{(place?.time_to_travel)||place?.time}</Text></Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor:'black',
          padding:8,
          borderRadius:7
        }}>
        <Ionicons name="navigate" size={20} color="white" />
        </TouchableOpacity>
        </View>
        </View>
      </View>
  )
}