import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {resetPassword, signInUser} from '../../services/auth';
import {colors} from '../../Utils/Theme';
import {TextInput} from 'react-native-paper';
import { validateEmail, validatePassword } from '../../Utils/Validation';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const [email, onChangeText] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');

  const signIn = () => {
    if (!validateEmail(email) ) {
      Toast.show({
        type: 'error',
        text1: 'Please enteer a valid email!'
      })
      return
    } 
    if (!validatePassword(password) ) {
      Alert.alert('Password must contain at least 8 characters, one uppercase letter, one number, and one special character')
      return
    } 

    if (email.length && password.length) signInUser({email, password});
    
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp')
  }

  const forgotPasswordProcess = () => {
    if (!validateEmail(email) || !email.length) {
      Alert.alert('Please make sure you have entered a valid email.')
      return
    }
    resetPassword(email)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>elation</Text>

        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={onChangeText}
            style={styles.input}
            outlineColor={colors.primary}
            textColor={colors.secondary}
          />

          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            style={styles.input}
            outlineColor={colors.primary}
            textColor={colors.secondary}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={{color: colors.secondary}}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.fpContainer} onPress={forgotPasswordProcess}>
          <Text style={{color: colors.primary}}>forgot password?</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signUpBotton} onPress={navigateToSignUp}>
        <Text style={styles.signUpText}>
          Dont have an account?
          <Text style={{color: colors.primary}}> Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 37,
    fontWeight: 'bold',
    color: colors.primary,
    paddingTop: 30,
    paddingLeft: 20,
  },
  inputContainer: {
    paddingTop: 100,
  },
  input: {
    marginVertical: 10,
    backgroundColor: colors.background,
    marginHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  fpContainer: {
    alignItems: 'center',
    marginTop: 5
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 20,
    borderRadius: 7,
  },
  signUpBotton: {
    alignItems: 'center',
    marginBottom: 7
  },
  signUpText: {
    fontSize: 15,
    color: colors.secondary
  }
});
