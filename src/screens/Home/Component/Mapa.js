import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = ({latitude, longitude}) => {
    const region = {
        latitude: latitude || 37.78825,
        longitude: longitude || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: latitude || 37.78825, // Valor padrão se não for fornecido
        longitude: longitude || -122.4324, // Valor padrão se não for fornecido
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={region}

    >
      {latitude && longitude && (
        <Marker
          coordinate={{ latitude, longitude }}
          title="Localização"
          description="Descrição da localização"
        />
      )}
    </MapView>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
         // Faz o container ocupar todo o espaço disponível
        justifyContent: 'center',  // Opcional: centraliza o conteúdo no eixo vertical
        alignItems: 'center',  // Opcional: centraliza o conteúdo no eixo horizontal
      },
      map: {
        width: '100%',  // Faz o mapa ocupar toda a largura do container
        height: '100%',  // Faz o mapa ocupar toda a altura do container
      },
});

export default MapComponent;
