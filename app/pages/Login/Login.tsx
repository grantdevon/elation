import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { signInUser } from '../../services/auth';

const Login = () => {
  const [email, onChangeText] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');

  const signIn = () => {
    if (email.length === 0 || password.length === 0) {
        Alert.alert('please make sure all value are entered')
    }

    signInUser({email, password})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>sign in!</Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder={'Enter email'}
        onChangeText={onChangeText}
      />

      <TextInput
        style={styles.input}
        value={password}
        placeholder={'Enter Password'}
        onChangeText={onChangePassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.input} onPress={signIn}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
