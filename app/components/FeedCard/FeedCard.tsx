import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { fetchDocuments } from '../../services/firebase';

const FeedCard = () => {
    useEffect(() => {
        const fetchDocs = async () => {
          return await fetchDocuments('Reports')
        }
        fetchDocs()
      }, []);
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {/* header */}
        <View style={styles.header}>

        </View>
      </View>
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
    elevation: 2, // Add elevation to create a shadow effect
  },
  header: {

  },
});


