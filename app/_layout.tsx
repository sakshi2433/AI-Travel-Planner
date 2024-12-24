import { Stack } from "expo-router";

export default function RootLayout() {
  
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf')
  })
  
  return 
  (
    <Stack screenOptions={{headerShown:false}}>
      {/*<Stack.Screen name="index" options={{headerShown:false}}/>*/}
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
function useFonts(arg0: { outfit: any; 'outfit-bold': any; 'outfit-medium': any; }) {
  throw new Error("Function not implemented.");
}

