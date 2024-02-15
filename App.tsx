import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Login from './app/pages/Login/Login';
import {onAuthStateChanged} from 'firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './app/TabNavigator';
import {auth} from './app/firebase-config';
import SignUp from './app/pages/SignUp/SignUp';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      user ? setUser(user) : setUser(undefined);
    });
  }, []);

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
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
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
