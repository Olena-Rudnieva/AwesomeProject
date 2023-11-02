import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

export const MapScreen = () => {
  const latitude = 49.7981;
  const longitude = 24.0522;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log('Map is ready')}
        onRegionChange={() => console.log('Region change')}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: latitude, longitude: longitude }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
