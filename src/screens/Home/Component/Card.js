import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ title, description, imageUrl, iconPath, detailTitle, detailDescription, latitude, longitude}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate("Details", { titulo: detailTitle, description: detailDescription, latitudeMap: latitude, longitudeMap: longitude })}
    > 
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.descriptionContainer}>
          {iconPath && <Image source={iconPath} style={styles.icon} />}
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  descriptionContainer: {
    flexDirection: "row-reverse",
    alignItems: 'center',
  },
  icon: {
    width: 20, // ajuste conforme necessário
    height: 20, // ajuste conforme necessário
    marginRight: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Card;
