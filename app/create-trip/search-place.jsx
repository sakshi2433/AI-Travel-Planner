import { View, Text ,Dimensions} from 'react-native'
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
  }),[tripData]
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>

     <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onFail={error=>console.log(error)}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url: details?.url
          }
        });

        router.push('/create-trip/select-traveler')
      }}
      query={{
        key: "AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss",
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:height*0.1,
          width
        }
      }}
    />

    </View>
  )
}