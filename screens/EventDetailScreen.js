import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const DetailsScreen = ({ route }) => {
  const { event } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); 

  const handleButtonPress = () => {
    if (comment.trim() === '') {
      Alert.alert('Uyarı', 'Lütfen bir yorum girin.');
    } else {
    
      setComments([...comments, comment]);
      Alert.alert('Başarılı', 'Yorumunuz başarıyla eklendi!');
     
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title   left={LeftContent} />
        <Card.Content>
          <Title>{event.title}</Title>
          <Paragraph>İstanbulda bir konser etkinliği</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:20, paddingTop:15,fontWeight:"450"}}>Yorumlar</Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 8,
            width: 200,
          }}
          placeholder="Yorumunuzu buraya girin"
          onChangeText={(text) => setComment(text)}
          value={comment}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={handleButtonPress}
        >
          <Text style={{ color: 'white' }}>Yorum Ekle</Text>
        </TouchableOpacity>

        {/* Yorumları göstermek için ScrollView kullanımı */}
        <ScrollView style={{ marginTop: 20, width: '100%' }}>
          {comments.map((item, index) => (
            <View key={index} style={{ borderBottomWidth: 1, padding: 10 }}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default DetailsScreen;




// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, ImageBackground, Image, StyleSheet, FlatList } from 'react-native';

// const EventDetailScreen = ({ route }) => {
//   const { event } = route.params;
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState(event.comments);

//   const addComment = () => {
//     setComments([...comments, comment]);
//     setComment('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>{event.title}</Text>
//       <Text>Yorumlar:</Text>
//       <FlatList
//         data={comments}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => <Text>{item}</Text>}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Yorum Ekle"
//         value={comment}
//         onChangeText={(text) => setComment(text)}
//       />
//       <Button title="Yorum Ekle" onPress={addComment} />
//       <Image style={styles.image} source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   image: {
//     width: "50%",
//     height: "50%",
//     marginTop: 10,
//   },
// });

// export default EventDetailScreen;
