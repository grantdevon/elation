import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {IFeedCard} from '../../Interfaces/Feed';
import { calculateDistance } from '../../Utils/Map'
import GetLocation from 'react-native-get-location';

const FeedCard: FC<IFeedCard> = ({doc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>{doc.coords.latitude}</Text>
        <Text>{doc.coords.longitude}</Text>
        <Text>Distance: {doc.distance} km's</Text>
        {/* <Text>{calculateDistance(currentLocation.latitude, currentLocation.longitude, doc.coords.latitude, doc.coords.longitude)} km's from you</Text> */}
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
    elevation: 2,
    height: 100,
  },
  header: {},
});
