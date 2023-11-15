import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedCard from '../../components/FeedCard/FeedCard';
import {fetchDocuments} from '../../services/firebase';

const Feed = () => {
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      fetchDocuments('Reports')
        .then(results => {
          console.log(results.length);

          if (results !== undefined) {
            setDocData(results);
          }
        })
        .catch(error => setDocData([]));
    };
    fetchDocs();
  }, []);
  return (
    <View>
      {docData &&
        docData.length > 0 &&
        docData.map((doc, index) => <FeedCard key={index} doc={doc} />)}
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({});
