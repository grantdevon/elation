import firestore from '@react-native-firebase/firestore';
import {ICoords} from '../Interfaces/Map';
import { getCurrentDate } from '../Utils/Date';

export const sendDoc = (coords: ICoords, type: string) => {
  firestore()
    .collection('Reports')
    .doc(type)
    .collection(getCurrentDate())
    .add(coords)
    .then(() => {
      console.log('User added!');
    })
    .catch(error => {
      console.log(error);
    });
};
