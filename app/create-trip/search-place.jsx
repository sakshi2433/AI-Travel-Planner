import { View, Text ,Dimensions, TouchableOpacity} from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'

export default function SearchPlace() {
  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router=useRouter();

const {width, height}=Dimensions.get('window');

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:'Search'
    })
  },[]);

  useEffect(()=>{
    console.log(tripData);
  },[tripData])
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>

     <GooglePlacesAutocomplete
      placeholder='From'
      fetchDetails={true}
      onFail={error=>console.log(error)}
      onPress={(data, details = null) => {
        setTripData({
          from:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url: details?.url
          },
          ...tripData
        });

      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        poweredContainer:{
          display:'none'
        },
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:height*0.1,
          width:width*0.9
        }
      }}
    />
     <GooglePlacesAutocomplete
      placeholder='Destination'
      fetchDetails={true}
      onFail={error=>console.log(error)}
      onPress={(data, details = null) => {
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url: details?.url
          },
          ...tripData
        });

      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        poweredContainer:{
          display:'none'
        },
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:height*0.1,
          width:width*0.9
        }
      }}
    />
    <TouchableOpacity
          onPress={()=>{
            console.log("Trip data:",tripData);
            router.push('/create-trip/select-traveler')}}
          style={{
            padding:15,
            backgroundColor:'black',
            borderRadius:20,
            width:width*0.9
          }}>
            
            <Text style={{
                color:'white',
                fontFamily:'outfit-medium',
                textAlign:'center',
                fontSize:20
    
            }}>Next</Text>
          </TouchableOpacity>

    </View>
  )
}