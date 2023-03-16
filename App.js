import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as react from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import AnswerKeyScreen1 from './screens/AnswerKey1';
import AnswerKeyScreen2 from './screens/AnswerKey2';
import AnswerKeyScreen3 from './screens/AnswerKey3';
import AnswerKeyScreen4 from './screens/AnswerKey4';
import AnswerKeyScreen5 from './screens/AnswerKey5';

 function App() {

  const Drawer = createDrawerNavigator;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen Name="AnswerKey1" component={AnswerKeyScreen1}/>
        <Drawer.Screen Name="AnswerKey2" component={AnswerKeyScreen2}/>
        <Drawer.Screen Name="AnswerKey3" component={AnswerKeyScreen3}/>
        <Drawer.Screen Name="AnswerKey4" component={AnswerKeyScreen4}/>
        <Drawer.Screen Name="AnswerKey5" component={AnswerKeyScreen5}/>


      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}   export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
