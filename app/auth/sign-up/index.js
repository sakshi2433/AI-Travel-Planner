import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'

export default function SignUp() {
const navigation=useNavigation();
const router=useRouter();
useEffect(()=>{
  navigation.setOptions({
    headerShown:false
  })
},[])

  return (
    <View style={{backgroundColor:'white'}}>
    <><View style={{ backgroundColor: 'white' }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        textAlign: 'center',
        margin: 40
      }}>Create New Account</Text>
    </View>
      <View style={{ backgroundColor: 'white'
       }}>
        <TextInput placeholder='Full Name' style={styles.input} />

        <TextInput placeholder='Username' style={styles.input} />

        <TextInput placeholder='Password' style={styles.input} />
      </View></>
      <View>
        <Text style={styles.button1}>Create New Account</Text>
      </View>




<TouchableOpacity
      onPress={()=>router.replace('app/auth/sign-in')}
      style={{backgroundColor:'white',
        marginBottom:1000
      }}>
        <Text style={styles.button2}>Sign-In</Text>
</TouchableOpacity>

   
      
      </View>
  )
}

const styles = StyleSheet.create({
  input:{
margin:10,
borderWidth:1,
borderRadius:20,
color:'gray',
textAlign:'left',
fontSize:18
  },
  button1:{
    backgroundColor:'black',
    color:'white',
    borderRadius:20,
    borderWidth:1,
    fontSize:22,
    margin:20,
    padding:10,
    textAlign:'center',
    marginBottom:50,
    marginTop:70
  },
  button2:{
    backgroundColor:'white',
    color:'gray',
    borderRadius:20,
    borderWidth:1,
    fontSize:22,
    padding:10,
    margin:20,
    textAlign:'center',
    marginTop:50
  }
})