

import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const events = [
    { id: 1, title: 'Etkinlik 1 ', location: { latitude: 41.0082, longitude: 28.9784 } },
    { id: 2, title: 'Etkinlik 2 ', location: { latitude: 41.0136, longitude: 28.9550 } },
    // ...
  ];

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 41.0082,
        longitude: 28.9784,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {events.map((event) => (
        <Marker
          key={event.id}
          coordinate={event.location}
          title={event.title}
        />
      ))}
    </MapView>
  );
};

export default MapScreen;
