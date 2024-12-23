import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SignIn() {

  const navigation=useNavigation();
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  
  return (
    <View style={{
      paddingTop:20,
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        margin:20
      }}>Let's Sign you In</Text>

      <Text style={{
        padding:20,
        fontFamily: 'outfit-medium',
        fontSize: 28,
        color:'gray'
      }}>Welcome Back :)</Text>

      <Text style={{
        margin: 20,
        fontFamily: 'outfit-medium',
        fontSize: 28,
        color:'gray'
      }}>You've been missed!</Text>

<View style={{
  margin:20
}}>
        <Text style={{fontFamily:'outfit-bold',
          marginLeft:10
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='enter email' />
      </View>

      <View style={{ margin:20}}>
        <Text style={{fontfamily:'outfit-bold',
          marginLeft:10
        }}>Password</Text>
        <TextInput style={styles.input} placeholder='enter password' />
      </View>

      <View style={{
        margin:40,
        backgroundColor:'black',
        borderRadius:25
      }}>
        <Text style={{
          color:'white',
          fontFamily:'outfit-bold',
          textAlign:'center',
          fontSize:20,
          margin:8
        }}>Sign In</Text>
      </View>



      <TouchableOpacity 
      onPress={()=>router.replace('app/auth/sign-up')}
      
      style={{
        margin:40,
        backgroundColor:'white',
        borderRadius:20
      }}>
        <Text style={{
          color:'black',
          fontFamily:'outfit-bold',
          textAlign:'center',
          fontSize:20,
          margin:8
        }}>Create New Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:10,
    borderWidth:1,
    borderRadius:30,
    fontFamily:'outfit'
  },
})