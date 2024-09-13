// PriceRangeSlider.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const PriceSlider = () => {
    const [value, setValue] = useState(500); // Valor inicial do slider
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Faixa de Preço:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          step={10}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="black"
        />
        <Text style={styles.value}>R${value}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      color:'black'
    },
    slider: {
      width: '80%',
      height: 40,
    },
    value: {
      fontSize: 16,
      marginTop: 10,
      color: 'black'
    },
  });
  
  export default PriceSlider;