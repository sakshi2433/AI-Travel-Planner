import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from 'expo-router';


export default function Profile() {

const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[]);
  return (
    <View style={{
      backgroundColor:'white',
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        textAlign:'center'
      }}>Profile</Text>
    </View>
  )
}