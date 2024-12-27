import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({userTrips}) {
  const LatestTrip=JSON.parse(userTrips[0].tripData);
  const router=useRouter();
  const formatData=(data)=>{
return JSON.parse(data);
}
    return userTrips&&(
    <View style={{
        width:'100%'
    }}>
      <View style={{
        marginTop:20
      }}>
        {LatestTrip?.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +LatestTrip?.locationInfo?.photoRef+'&key='+'AIzaSyA2hC-NLy9UGnzOOqTZDnRxr7uSny89dss'}}
        style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
        }} 
        />
        :
        <Image source={require('./../../assets/images/earth.jpeg')}
        style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
        }}        
        />}
        <View style={{
            marginTop:10
        }}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:24,
                color:'black'
            }}>{userTrips[0]?.tripPlan?.location}</Text>
            
            
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
            }}><Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:'gray'
            }}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}
            </Text>

            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:'gray'
            }}>🚌{LatestTrip.traveler?.title}</Text>
            </View>
            <TouchableOpacity
            onPress={()=>router.push({pathname:'/trip-details',params:
                {trip:JSON.stringify(userTrips[0])
            }})}
            style={{
                backgroundColor:'black',
                padding:15,
                borderRadius:15,
                marginTop:10
            }}>
                <Text style={{
                    color:'white',
                    textAlign:'center',
                    fontFamily:'outfit-medium',
                    fontSize:17
                }}>See your plan</Text>
            </TouchableOpacity>
        </View>
        {userTrips.map((trip,index)=>(
            <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  )
}