import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'

export default function SignIn() {

  const navigation=useNavigation();
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  
  return (
    <View style={{
      marginTop: 40,
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30
      }}>Let's Sign you In</Text>

      <Text style={{
        margin: 20,
        fontFamily: 'outfit-medium',
        fontSize: 28
      }}>Welcome Back :)</Text>

      <Text style={{
        margin: 20,
        fontFamily: 'outfit-medium',
        fontSize: 28
      }}>You've been missed!</Text>

<View>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput style={styles.input} placeholder='enter email' />
      </View>

      <View>
        <Text style={{fontfamily:'outfit'}}>Password</Text>
        <TextInput style={styles.input} placeholder='enter password' />
      </View>

      <View style={{
        margin:40,
        backgroundColor:'black',
        borderRadius:20
      }}>
        <Text style={{
          color:'white',
          fontFamily:'outfit-bold',
          textAlign:'center'
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
          textAlign:'center'
        }}>Create New Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:20,
    borderWidth:1,
    borderRadius:1,
    fontFamily:'outfit'
  },
})