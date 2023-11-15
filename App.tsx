import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Login from './app/pages/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './app/firebase-config';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './app/TabNavigator';



// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const App = () => {
  const [user, setUser] = useState();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(undefined)
    })
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen 
            name="TabNav" 
            component={TabNavigator} 
            options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen 
            name="Login" 
            component={Login} 
            />
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});


