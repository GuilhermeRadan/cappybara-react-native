import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomCard = ({text}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2, // Largura da borda
    borderColor: 'black', // Cor da borda
    borderRadius: 10, // Bordas arredondadas (opcional)
    padding: 20, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto horizontalmente
    justifyContent: 'center', // Centraliza o texto verticalmente
    width: 150, // Largura do Card (ajuste conforme necessário)
    height: 130, // Altura do Card (ajuste conforme necessário)
    backgroundColor: '#fff', // Cor de fundo do Card
  },
  cardText: {
    fontSize: 18, // Tamanho do texto
    color: 'black', // Cor do texto
  },
});

export default CustomCard;
