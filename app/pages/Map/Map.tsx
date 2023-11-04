import { Alert, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Heatmap, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FAB } from '@rneui/themed';
import { ICoords, IMapData } from '../../Interfaces/Map';
import { showToast } from '../../Utils/Toast';
import GetLocation from 'react-native-get-location';
import { fetchDocuments, sendDoc } from '../../services/firebase';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const [markerVisible, setMarkerVisible] = useState(false);
  const [eventType, setEventType] = useState<string>('');
  const [mapData, setMapData] = useState<IMapData[]>([])

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setCurrentLocation({
          latitude: location.latitude,
          longitude: location.longitude
        });
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(() => {
    const fetchMapData = async () => {
      const mapPoints = await fetchDocuments('Reports') 
      let tempArr: [] = []     
      mapPoints?.forEach(point => {        
        tempArr.push({
          latitude: point.coords.latitude,
          longitude: point.coords.longitude,
          weight: 3
        })
      })
      setMapData(tempArr)

    }    
    fetchMapData()
  }, [])



  const logReport = () => {
    Alert.alert(
      'Would you like to log suspicious activity or a crime?',
      undefined,
      [
        {
          text: 'Suspicious Activity',
          onPress: () => logEvent('Suspicious Activity'),
        },
        {
          text: 'Crime',
          onPress: () => logEvent('Crime'),
        },
      ],
    );
  };

  const logEvent = (type: string) => {
    showToast(
      'success',
      'Hi!',
      'Please make sure to long press on the marker to drag it.'
    );
    setEventType(type);
    setMarkerVisible(true);
  };

  const confirmEvent = (coords: ICoords) => {
    Alert.alert('Confirm marker location?', undefined, [
      {
        text: 'Confirm',
        onPress: () => sendEvent(coords, eventType),
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };

  const sendEvent = (coords: ICoords, type: string) => {
    setMapData((prevMapData) => [
      ...prevMapData,
      {
        latitude: coords.latitude,
        longitude: coords.longitude,
        weight: 3, // You can adjust the weight as needed
      },
    ]);
    setMarkerVisible(false);
    showToast('success', 'Thank you!', 'Event logged successfully!');
    sendDoc('Reports', coords, type)
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markerVisible && (
          <Marker
            draggable={true}
            coordinate={currentLocation}
            onDragEnd={e => confirmEvent(e.nativeEvent.coordinate)}
          />
        )}
        {mapData.length > 0 && <Heatmap points={mapData} radius={50}/>}

        {/* <Heatmap points={50}/> */}
      </MapView>
      <FAB
        color="blue"
        placement="right"
        upperCase
        icon={{ name: 'place', color: 'white' }}
        onPress={logReport}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
