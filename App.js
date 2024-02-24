import Camera from './src/component/camera'
// import CustomBtn from './src/component/customBtn';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Arfa</Text> */}
      <Camera/>
      {/* <CustomBtn/> */}
      <StatusBar style="auto" />
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
})
// ;import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ListScreen from './screens/ListScreen';
// import CameraScreen from './screens/CameraScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="List">
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="Camera" component={CameraScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
