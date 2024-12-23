import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import SignIn from './app/auth/sign-in';
import SignUp from './app/auth/sign-up';


export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />


      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
