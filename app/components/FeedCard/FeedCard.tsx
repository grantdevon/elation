import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchDocuments} from '../../services/firebase';

const FeedCard = () => {
  const [feedCardData, setFeedCardData] = useState([]);
  useEffect(() => {
    const fetchDocs = async () => {
      let data = await fetchDocuments('Reports');
      // console.log(data);
      data?.map(point => {
        console.log(point.coords.latitude);
        
      })
      
      setFeedCardData(data);
      return data;
    };
    fetchDocs();
  }, []);
  return (
    <View style={styles.container}>
      {feedCardData &&
        feedCardData.length > 0 &&
        feedCardData.map((pointData, index) => (
          <View style={styles.cardContainer} key={index}>
            {/* <View style={styles.header}> */}
                <Text style={{color: 'black'}}>{pointData.date}</Text>
                <Text style={{color: 'black'}}>{pointData.coords.longitude}</Text>
            {/* </View> */}
          </View>
        ))}
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginVertical: 10,
    height: 100 
  },
  header: {},
});
