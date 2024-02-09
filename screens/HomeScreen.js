

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Etkinlik 1 (24 Agu 2024)', location: { latitude: 41.0082, longitude: 28.9784 }, comments: [] },
    { id: 2, title: 'Etkinlik 2 (28 Eyl 2024)', location: { latitude: 41.0136, longitude: 28.9550 }, comments: [] },

  ]);

  return (
    <View >
      <Text style={{ fontSize: 30, fontWeight: "bold", alignItems: "center", justifyContent: "center", paddingLeft: "25%" }}>İstanbul Etkinlik</Text>
      {events.map((event) => (
        <View 
          key={event.id}>
          <Text style={{ alignItems: "center", fontWeight: "bold", paddingLeft: "30%", justifyContent: "center", marginTop: "20%", fontSize: 15 }}>{event.title}</Text>
          <Button
           title="Haritada Göster"
            onPress={() => navigation.navigate('Map', { events })}
          />
          <Button
            title="Detayları Gör"
            onPress={() => navigation.navigate('EventDetail', { event })}
          />
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
