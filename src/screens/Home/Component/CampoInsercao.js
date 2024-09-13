import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function CampoInsercao() {
  const [text, setText] = useState(''); // Estado para armazenar o valor do campo

  const handleChange = (newText) => {
    setText(newText); // Atualiza o estado com o novo valor
  };

  const handleSubmit = () => {
    console.log('Texto inserido:', text); // Manipula o valor do texto quando o usuário submete
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui..."
        value={text} // Vincula o valor do campo ao estado
        onChangeText={handleChange} // Atualiza o estado quando o texto muda
      />
      <Button
        title="Submeter"
        onPress={handleSubmit} // Manipula o valor quando o botão é pressionado
      />
      {text.length > 0 && <Text>Você digitou: {text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

