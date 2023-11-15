import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedCard from '../../components/FeedCard/FeedCard';
import {fetchDocuments} from '../../services/firebase';
import {FlatList} from 'react-native-gesture-handler';
import GetLocation from 'react-native-get-location';
import { calculateDistance } from '../../Utils/Map';

const Feed = () => {
  const [docData, setDocData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setCurrentLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });

        // Fetch documents inside the 'then' block
        fetchDocs();
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  const fetchDocs = async () => {
    fetchDocuments('Reports')
      .then(results => {
        console.log(results.length);

        if (results !== undefined) {
          // Calculate distances for each document
          const docsWithDistances = results.map(doc => ({
            ...doc,
            distance: calculateDistance(
              currentLocation.latitude,
              currentLocation.longitude,
              doc.coords.latitude,
              doc.coords.longitude
            ),
          }));

          // Sort documents by distance
          const sortedDocData = docsWithDistances.sort(
            (a, b) => a.distance - b.distance
          );

          console.log(sortedDocData);
          setDocData(sortedDocData);
        }
      })
      .catch(error => setDocData([]));
  };

  const renderItem = ({item}) => {
    return <FeedCard doc={item} />;
  };

  const ListEmpty = () => {
    return (
      <Text>List Empty</Text>
    )
  }

  return (
    <View>
      {docData && docData.length > 0 && (
        <FlatList
          data={docData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<ListEmpty />}
        />
      )}
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({});
