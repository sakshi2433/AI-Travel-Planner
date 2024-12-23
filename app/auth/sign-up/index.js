import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from './../../../configs/FirebaseConfig'

export default function SignUp() {
const navigation=useNavigation();
const router=useRouter();

const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [fullName,setFullName]=useState();

useEffect(()=>{
  navigation.setOptions({
    headerShown:false
  })
},[])

const OnCreateAccount=()=>{

  if(!email&&!password&&!fullName)
  {
    ToastAndroid.show("please enter all details",ToastAndroid.LONG)
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  })
}

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
        <TextInput placeholder='Enter Full Name' style={styles.input}
        onChangeText={(value)=>setFullName(value)} />

        <TextInput placeholder='Enter Username' style={styles.input}
        onChangeText={(value)=>setEmail(value)} />

        <TextInput placeholder='Enter Password' style={styles.input} 
        onChangeText={(value)=>setPassword(value)}/>
      </View></>
      <TouchableOpacity onPress={OnCreateAccount}>
        <Text style={styles.button1}>Create New Account</Text>
      </TouchableOpacity>




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