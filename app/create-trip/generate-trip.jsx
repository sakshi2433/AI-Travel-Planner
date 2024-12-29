import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AIModel'
import { useRouter } from 'expo-router'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { auth, db } from './../../configs/FirebaseConfig'

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip()
  }, [])

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{from}', tripData?.from?.name)
      .replace('{to}', tripData?.locationInfo?.name)
      .replace('{totalDays}', tripData.totalNoOfDays)
      .replace('{totalNight}', tripData.totalNoOfDays - 1)
      .replace('{traveler}', tripData.traveler?.title)
      .replace('{budget}', tripData.budget)
      .replace('{totalDays}', tripData.totalNoOfDays)
      .replace('{totalNight}', tripData.totalNoOfDays - 1)

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());

    const tripResp = JSON.parse(result.response.text());



    setLoading(false);
    const docId = (Date.now()).toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResp, //ai result
      tripData: JSON.stringify(tripData), // user data
      docId: docId
    })


    router.push('(tabs)/mytrip');


  }
  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: 'white',
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        textAlign: 'center'
      }}>Please Wait..</Text>

      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        color: 'gray'
      }}>We are building your trip</Text>

      <Image
        source={require('./../../assets/images/plane.gif')}
        style={{
          width: '100%',
          height: 300,
          marginTop: 20,
          resizeMode: 'contain',
        }}
      />
      <Text style={{
        fontFamily: 'outfit',
        color: 'gray',
        textAlign: 'center',
        fontSize: 20
      }}>Do not Go Back</Text>
    </View>
  )
}