import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Login() {


    const router=useRouter();
  return (
    <View>

      <Image source={require('./../assets/images/login.png')}
      style={
        {width:'100%',
            height:400
        }}
      />


<View style={{
    backgroundColor:'white',
    borderTopRightRadius:60,
    borderTopLeftRadius:60,
    marginTop:20,
    fontSize:25,
    width:'100%'
    }}>
    <Text style={{textAlign:'center',fontSize:25,fontFamily:'outfit-bold',
        marginTop:30
    }}>
         AI Travel Planner</Text>


    <Text style={{fontFamily:'outfit',
        fontSize:15,
        textAlign:'center',
        color:'#99AAAB',
        marginTop:25
    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae deserunt a cupiditate veritatis consequatur delectus tenetur officia. Fugiat sint cupiditate porro laboriosam voluptatibus, perferendis asperiores harum veniam expedita? Corporis, consequatur?
    </Text>



    <TouchableOpacity style={styles.button}
    onPress={()=>router.push('auth/sign-in')}
       >
        <Text style={{color:'white',
        textAlign:'center',
        marginTop: 2,
        marginBottom:2
}}>Get Started</Text>
        </TouchableOpacity>



</View>
    
  </View>

  )
}
const styles = StyleSheet.create({
    button:{
        marginTop:10,
        padding:10,
        fontFamily:'outfit-bold',
        fontSize:20,
        backgroundColor:'black',
        borderRadius:200,
    },



})