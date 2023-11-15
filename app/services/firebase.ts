import {ICoords} from '../Interfaces/Map';
import { getCurrentDate, getCurrentTime } from '../Utils/DateAndTime';

export const sendDoc = (collection: string, coords: ICoords, type: string) => {
  // firestore()
  //   .collection(collection)
  //   .add({
  //     coords: coords,
  //     type: type,
  //     date: getCurrentDate(),
  //     time: getCurrentTime()
  //   })
  //   .then(() => {
  //     console.log('Doc created!');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};

export const fetchDocuments = async (collection: string) => {  
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
}
