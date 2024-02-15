import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {IAuthUserObj} from '../Interfaces/Auth';
import {auth} from '../firebase-config';
import Toast from 'react-native-toast-message';

export const createUser = (authUserObj: IAuthUserObj) => {
  createUserWithEmailAndPassword(auth, authUserObj.email, authUserObj.password)
    .then(userCredential => {
      //create user firebase obj 'user'
      const user = userCredential.user;
      console.log('user created! ', user);
      sendEmailVerification(user)
        .then(() => {
          console.log('email sent');
        })
        .catch(error => console.log(error));
    })
    .catch((error: Error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      //show common error page

      //use these examples:
      // if (error.code === 'auth/email-already-in-use') {
      //     console.log('That email address is already in use!');
      //   }

      //   if (error.code === 'auth/invalid-email') {
      //     console.log('That email address is invalid!');
      //   }
    });
};

export const signInUser = (authUserObj: IAuthUserObj) => {
  signInWithEmailAndPassword(auth, authUserObj.email, authUserObj.password)
    .then(userCredential => {
      console.log('user created!');
      const user = userCredential.user;
    })
    .catch((error: Error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      Toast.show({
        type: 'error',
        text1: error.message
      })
      //show common error page

      //use these examples:
      // if (error.code === 'auth/email-already-in-use') {
      //     console.log('That email address is already in use!');
      //   }

      //   if (error.code === 'auth/invalid-email') {
      //     console.log('That email address is invalid!');
      //   }
    });
};

export const signOutUser = () => {
  //add error checking
  auth.signOut();
};

export const resetPassword = (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      //show toast
      Toast.show({
        type: 'success',
        text1: 'Password reset link sent!'
      })
      // ..
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Toast.show({
        type: 'error',
        text1: errorMessage
      })
      // ..
    });
};
