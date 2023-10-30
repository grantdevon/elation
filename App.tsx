import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './app/pages/Feed/Feed';
import Map from './app/pages/Map/Map';
import Profile from './app/pages/Profile/Profile';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
