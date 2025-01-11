import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
export default function Login() {
  const window = Dimensions.get('window');


  const router = useRouter();
  return (
    <View>

      <Image source={require('./../assets/images/login.png')}
        style={
          {
            width: window.width,
            height: window.height/1.7,
          }}
      />


      <View style={styles.container}>
        <Text style={{
          textAlign: 'center', fontSize: 25, fontFamily: 'outfit-bold',
          marginTop: 20
        }}>
          AI Travel Planner</Text>


        <Text style={{
          fontFamily: 'outfit',
          fontSize: 15,
          textAlign: 'center',
          color: '#99AAAB',
          margin: 20,
         
        }}>An AI-driven travel planner app that transforms trip planning into a seamless experience. It customizes itineraries, suggests destinations, finds the best deals, and provides real-time recommendations. With advanced AI, explore new places, manage bookings effortlessly, and enjoy stress-free travel tailored to your preferences—all in one user-friendly platform.
        </Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('auth/sign-in')}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            padding:10,
            margin: 2,
          }}>Get Started</Text>
        </TouchableOpacity>



      </View>

    </View>

  )
}
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    fontFamily: 'outfit-bold',
    fontSize: 20,
    backgroundColor: 'black',
    borderRadius: 200,
  },

container:{
  marginTop:-20,
  backgroundColor: 'white',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,

}

})