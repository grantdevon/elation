import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { signOutUser } from '../../services/auth';

const Profile = () => {

  return (
    <View>
      <TouchableOpacity onPress={signOutUser}>
        <Text>sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
