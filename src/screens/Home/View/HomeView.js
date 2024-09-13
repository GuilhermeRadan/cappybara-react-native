import React from 'react';
import { View, ScrollView , StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../Component/Card';
import CardTopo from '../Component/CardTopo';


import TopBar from '../Component/TopBar';


const Home = ({navigation}) => {
    let item1 = {titulo : "Exposicao Vila do Chaves", description: "avaliacao de exemplo, com notas altas feitas pelos usuarios", latitude: -23.512938270728654, longitude: -46.69501997754292}
    let item2 = {titulo : "Evento NEXT", description: "avaliacao de exemplo, com notas altas feitas pelos usuarios",  latitude: -23.54021881370046, longitude:  -46.734460295912854}
    let item3 = {titulo : "LOLAPALOZA", description: "avaliacao de exemplo, com notas altas feitas pelos usuarios",  latitude: -23.702765814805964,  longitude: -46.696998447474535}
    let item4 = {titulo : "Baile Funk D17", description: "avaliacao de exemplo, com notas altas feitas pelos usuarios",  latitude: -23.615902623476376, longitude: -46.724305444355096}

    return (
        <ScrollView style={styles.container}>
            <TopBar  
            iconLogo={require('../../../assets/imagens/cappybara.png')}
            iconLocation={require('../../../assets/imagens/location.png')}
            textLocation= "Jundiaí"
            iconArrow={require('../../../assets/imagens/arrow.png')}
            iconConfig={require('../../../assets/imagens/Settings.png')}
            />

        <View style={styles.containerTopo}>
            <CardTopo
            text= "Atrações do seu interesse"
            />
            <CardTopo
            text= "Eventos mais próximo de você"
            />
        </View>
        <Text style={styles.containerTitulo}>Melhores Avaliações</Text>

        
        <Card 
          title="Exposição Vila do Chaves"
          description="4.8"
          imageUrl="https://via.placeholder.com/150"
          iconPath={require('../../../assets/imagens/image.png')}
          detailTitle={item1.titulo}
          detailDescription={item1.description}
          latitude= {item1.latitude}
          longitude = {item1.longitude}
        />
       <Card 
        title={item2.titulo}
        description="5.0" 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
        detailTitle={item2.titulo}
        detailDescription={item2.description}
        latitude= {item2.latitude}
        longitude = {item2.longitude}
      />
       <Card 
        title={item3.titulo}
        description="4.8" 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
        detailTitle={item3.titulo}
        detailDescription={item3.description}
        latitude= {item3.latitude}
        longitude = {item3.longitude}
      />
      <Card 
        title={item4.titulo} 
        description="5.4." 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
        detailTitle={item4.titulo}
        detailDescription={item4.description}
        latitude= {item4.latitude}
        longitude = {item4.longitude}
      />
    </ScrollView>

      );
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 40
    },
    containerTopo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15

    },
    containerTitulo:{
        marginBottom: 15,
        fontSize: 20,
        color: 'black'
    }

})
export default Home;