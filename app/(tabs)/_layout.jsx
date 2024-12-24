import { View, Text } from 'react-native'
import React from 'react'
import { Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor:'black'
   }}>
    <Tabs.Screen options={{
      tabBarLabel:'My Trip',
      tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color="black" />
    }}
    name="mytrip"/>


    <Tabs.Screen options={{
      tabBarLabel:'Discover',
      tabBarIcon:({color})=><Ionicons name="globe-outline" size={24} color="black" />
    }}
    name="discover"/>
    <Tabs.Screen options={{
      tabBarLabel:'Profile',
      tabBarIcon:({color})=><Ionicons name="person" size={24} color="black" />
    }}
    name="profile"/>
   </Tabs>
  )
}