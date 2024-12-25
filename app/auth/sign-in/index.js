import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignIn() {

  const window = Dimensions.get('window');
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn=()=>{
if(!email&&!password)
{
  ToastAndroid.show("Please enter Email & Password",ToastAndroid.BOTTOM)
  return;
}

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code)
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show("Invalid credentials",ToastAndroid.BOTTOM)
      return;
    }
  });
}

  return (
    <View style={{
      paddingTop: 20,
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        margin: window.width*0.03
      }}>Let's Sign you In</Text>

      <Text style={{
        padding: window.width * 0.02,
        fontFamily: 'outfit-medium',
        fontSize: 28,
        color: 'gray'
      }}>Welcome Back :)</Text>

      <Text style={{
        margin: window.width * 0.02,
        fontFamily: 'outfit-medium',
        fontSize: 28,
        color: 'gray'
      }}>You've been missed!</Text>

      <View style={{
        margin: 20
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          marginLeft: 10
        }}>Email</Text>
        <TextInput 
        onChangeText={(value)=>setEmail(value)}
        style={styles.input} placeholder='enter email' />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={{
          fontfamily: 'outfit-bold',
          marginLeft: 10
        }}>Password</Text>
        <TextInput 
        onChangeText={(value)=>setPassword(value)}
        style={styles.input} placeholder='enter password' />
      </View>

      <TouchableOpacity 
      onPress={onSignIn}
      style={{
        margin: window.width * 0.05,
        backgroundColor: 'black',
        borderRadius: 25
      }}>
        <Text style={{
          color: 'white',
          fontFamily: 'outfit-bold',
          textAlign: 'center',
          fontSize: 20,
          margin: 8
        }}>Sign In</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => router.replace('/auth/sign-up')}

        style={{
          margin: 40,
          backgroundColor: 'white',
          borderRadius: 20
        }}>
        <Text style={{
          color: 'black',
          fontFamily: 'outfit-bold',
          textAlign: 'center',
          fontSize: 20,
          margin: 8
        }}>Create New Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    fontFamily: 'outfit'
  },
})