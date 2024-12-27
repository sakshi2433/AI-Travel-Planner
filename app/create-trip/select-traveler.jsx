import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SelectTravelesList } from '../../constants/Options'; 
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'
import { Link, useRouter } from 'expo-router';



export default function SelectTraveler() {
    const window = Dimensions.get('window');
    const navigation=useNavigation();
    const [selectedTraveler,setSelectedTraveler]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    


    

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler])


    useEffect(()=>{
        console.log(tripData)
    },[tripData])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
      }}>Whos's Travelling?</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:23,

        }}>Choose your traveles.. </Text>

        <FlatList
        data={SelectTravelesList}
        renderItem={({item,index})=>(
            <TouchableOpacity
            onPress={()=>setSelectedTraveler(item)}
            style={{
                marginVertical:20
            }}>
                <OptionCard option={item} selectedOption={selectedTraveler}/>
                </TouchableOpacity>
            
        )}/>
      </View>

        
      <TouchableOpacity style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:20,
        marginTop:20
      }}>
        <Link href={'/create-trip/select-dates'}>
        <Text style={{
            color:'white',
            fontFamily:'outfit-medium',
            textAlign:'center',
            fontSize:20

        }}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  )
  }