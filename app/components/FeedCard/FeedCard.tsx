import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {fetchDocuments} from '../../services/firebase';
import {IFeedCard} from '../../Interfaces/Feed';

const FeedCard: FC<IFeedCard> = ({doc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>{doc.coords.latitude}</Text>
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
