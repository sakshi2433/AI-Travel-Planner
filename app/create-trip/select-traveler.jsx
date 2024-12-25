import { View, Text, Dimensions, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SelectTravelesList } from '../../constants/Options'; 
import OptionCard from '../../components/CreateTrip/OptionCard';

export default function SelectTraveler() {
    const window = Dimensions.get('window');
    const navigation=useNavigation();
    const OptionList=[{
    }]


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'window.height'
    }}>
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Whos's Travelling?</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:15,

        }}>Choose your traveles.. </Text>

        <FlatList
        data={SelectTravelesList}
        renderItem={(item,index)=>(
            <View>
                <OptionCard option={item}/>
                </View>
            
        )}/>
      </View>
    </View>
  )
  }