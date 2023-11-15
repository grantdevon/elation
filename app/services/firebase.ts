import {ref, set} from 'firebase/database';
import {ICoords} from '../Interfaces/Map';
import {getCurrentDate, getCurrentTime} from '../Utils/DateAndTime';
import {db} from '../firebase-config';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';


export const sendDoc = (
  collectionName: string,
  coords: ICoords,
  type: string,
) => {
  addDoc(collection(db, collectionName), {
    coords: coords,
    type: type,
    date: getCurrentDate(),
    time: getCurrentTime(),
  })
    .then(() => {
      console.log('Doc created!');
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchDocuments = async (collectionName: string) => {
  let mapData: [] = [];
  const q = query(collection(db, collectionName), where('date', '==', getCurrentDate()));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    mapData.push(doc.data());
  });
  return mapData;
  // try {
  //   const doc = await firestore()
  //     .collection(collection)
  //     .where('date', '==', getCurrentDate())
  //     .get();
  //     let mapData:[] = []
  //     doc.docs.map(map => {
  //      mapData.push(map.data())
  //     })
  //   return mapData;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};
