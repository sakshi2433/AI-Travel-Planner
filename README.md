Check the `app\auth\sign-in\index.js` file:

**Your code**  
```jsx
<Text style={{
  padding: 20,
  fontFamily: 'outfit-medium',
  fontSize: 28,
  color: 'gray'
}}>Welcome Back :)</Text>

<Text style={{
  margin: 20,
  fontFamily: 'outfit-medium',
  fontSize: 28,
  color: 'gray'
}}>You've been missed!</Text>
```
**Better Code**  
```jsx
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
```

As you can see I have used `window.width` to get screen width and so multiplying it with 0.02 make it 2% screen width no matter what's the user's screen size.  
You may do the same for fontSize attribute so the your app scales according to user's device.

**But for this to work** `window` variable must be defined so you need to first import `Dimentions`
So have changed first line to
```jsx
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
```
and then Added
```jsx
export default function SignIn() {

  const window = Dimensions.get('window');
  // other code 
  return (<Component>)
}
```
Done! now you can use window variable within `<Component>` or any where within the `function SignIn`