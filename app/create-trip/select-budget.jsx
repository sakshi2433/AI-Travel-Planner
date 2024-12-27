import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { SelectBudgetOptions } from '../../constants/Options'; 
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function SelectBudget() {

    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);


    useEffect(()=>{
        setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption])

const onClickContinue=()=>{
    if(!selectedOption)
    {
        ToastAndroid.show('Select your Budget',ToastAndroid.LONG);
        return;
    }
    router.push('/create-trip/review-trip');
}


  return (
    <View style={{
        paddingTop:75,
        padding:25,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            color:'gray'
        }}>Choose spending habits for your next trip:</Text>

        <FlatList 
        data={SelectBudgetOptions}
        renderItem={({item,index})=>(
                    <TouchableOpacity
                    style={{
                        marginVertical:10
                    }}
                    onPress={()=>setSelectedOption(item)}
                    >
                        <OptionCard option={item} selectedOption={selectedOption}/>
                        </TouchableOpacity>
                    
                )}
        />
      </View>

      <TouchableOpacity
      onPress={()=>onClickContinue()}
      style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:20,
        marginTop:20
      }}>
        
        <Text style={{
            color:'white',
            fontFamily:'outfit-medium',
            textAlign:'center',
            fontSize:20

        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}