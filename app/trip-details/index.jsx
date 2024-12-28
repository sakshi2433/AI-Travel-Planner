import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import { CreateTripContext } from '../../context/CreateTripContext';
import HotelList from '../../components/TripDetails/HotelList';



export default function TripDetails() {
const navigation=useNavigation();
const {trip}=useLocalSearchParams();
const [tripDetails,setTripDetails]=useState([]);
const {tripData,setTripData}=useContext(CreateTripContext);


const formatData=(data)=>{
  return JSON.parse(data);
  };

useEffect(()=>{
  navigation.setOptions({
    headerShown:true,
    headerTransparent:true,
    headerTitle:''
  });

  setTripDetails(JSON.parse(trip))
},[])


  return tripDetails&&(
    <View>
      <Image source={{uri:
      'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
              +formatData(tripDetails.tripData).locationInfo?.photoRef
              +'&key='+'AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss'}}
              style={{
                width:'100%',
                height:330
              }} 
              />

              <View style={{
                padding:15,
                backgroundColor:'white',
                height:'100%',
                marginTop:-30,
                borderTopLeftRadius:30,
                borderTopRightRadius:30
              }}>
                <Text style={{
                  fontSize:25,
                  fontFamily:'outfit-bold'
                }}>{tripDetails.tripPlan?.location}</Text>
      <View style={{
                display:'flex',
                flexDirection:'row',
                gap:5,
                marginTop:5
              }}>
                <Text style={{
            fontFamily:'outfit',
            fontSize:18,
            color:'gray'
        }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MMM YYYY')}</Text>

        <Text style={{
                    fontFamily:'outfit',
                    fontSize:18,
                    color:'gray'
                }}>- {moment(formatData(tripDetails.tripData).endDate).format('DD MMM YYYY')}</Text>
      </View>
      <Text style={{
                      fontFamily:'outfit',
                      fontSize:17,
                      color:'gray'
                  }}>🚌{formatData(tripDetails,tripData)?.traveler?.title}</Text>
      
{/* flight info  */}
<FlightInfo flightData={tripDetails?.tripPlan?.flight_details} />

{/* hotels list  */}
<HotelList hotelList={tripDetails?.tripPlan?.hotels}/>

{/* trip day planner  */}


      
      
      
      </View>


    </View>
  )
}