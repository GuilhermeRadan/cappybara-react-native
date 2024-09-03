import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons'; // ou use outra biblioteca de ícones, como react-native-vector-icons

const BottomNavBar = ({ navigation }) => {

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('HomeView')}>
        <FontAwesome name="home" size={30} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigateTo('Search')}>
        <FontAwesome name="search" size={30} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigateTo('Calendar')}>
        <FontAwesome name="calendar" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff', // Cor do fundo do menu
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default BottomNavBar;
