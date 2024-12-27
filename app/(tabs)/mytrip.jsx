import { View, Text, Dimensions, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import {query,collection, where, getDocs} from 'firebase/firestore';
import {auth, db} from './../../configs/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';
import { useNavigation } from 'expo-router';


export default function MyTrip() {

  const window = Dimensions.get('window');

  const [userTrips,setUserTrips]=useState([]);
  const user=auth.currentUser;
  const [loading,setLoading]=useState(false);
const navigation=useNavigation();
  
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[]);
  useEffect(()=>{
    user&&GetMyTrips()
  },[user])
  const GetMyTrips=async()=>{
    setLoading(true);
    setUserTrips([]);
    const q=query(collection(db,'UserTrips'),where('userEmail','==',user?.email));
    const querySnapshot= await getDocs(q);


    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev,doc.data()])
  });
setLoading(false);
  }
  return (
    <ScrollView style={{
      backgroundColor:'white',
      height:'window.height'
    }}>
      
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>My Trips</Text>
      <Ionicons name="add-circle-outline" size={48} color="black" />
      
      
      </View>
      {loading&&<ActivityIndicator size={'large'} color={'black'}/>}
      {userTrips.length==0?<StartNewTripCard/>:
      <UserTripList userTrips={userTrips}/>
      }
    </ScrollView>
  )
}