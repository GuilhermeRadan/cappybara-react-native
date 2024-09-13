import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapComponent from '../Component/Mapa';

const Details = ({ navigation})=> {
    const route=  useRoute();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../assets/imagens/de-volta.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        
            <View style={styles.containerCard}>
            <View style={styles.card}>
                <Image source={require('../../../assets/imagens/placeholder.png')} style={styles.image}></Image>
            </View>
            <View style={styles.cardLess}>
                <Image source={require('../../../assets/imagens/placeholder.png')} style={styles.imageCardLess}></Image>
            </View>
            <View style={styles.cardLess}>
                <Image source={require('../../../assets/imagens/placeholder.png')} style={styles.imageCardLess}></Image>
            </View>
            </View>

            <Text style={styles.textTitle}>{route.params.titulo}</Text>
            <Text style={styles.textSubTitle}>{route.params.description}</Text>
           
            <View style= {{width: 340, height: 300, marginTop: 30}}>
                <MapComponent latitude={route.params.latitudeMap} longitude={route.params.longitudeMap}/>
            </View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Como Chegar</Text>
            </View>
           
        </View>
        
    );
};
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginStart: 40,

    },
    containerCard:{
        flexDirection: 'row',
        marginTop: 30
    
        
    },
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
      marginEnd: 30
    },
    cardLess:{
        borderWidth: 2, // Largura da borda
      borderColor: 'black', // Cor da borda
      borderRadius: 10, // Bordas arredondadas (opcional)
      alignItems: 'center', // Centraliza o texto horizontalmente
      justifyContent: 'center', // Centraliza o texto verticalmente
      width: 90, // Largura do Card (ajuste conforme necessário)
      height: 130, // Altura do Card (ajuste conforme necessário)
      backgroundColor: '#fff', // Cor de fundo do Card
      marginEnd: 30
    },
    cardText: {
      fontSize: 18, 
      color: 'black',
    },
    image: {
        width: 142,
        height: 122,
      },
    imageCardLess:{
        width:80,
        height:120
    },
    buttonVoltar: {
        padding: 0,
        backgroundColor: 'transparent', 
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 15
    },
    textTitle:{
        fontSize: 20,
        color: 'black',
        marginTop:22
    },
    textSubTitle:{
        marginTop:20,
    },
    button: {
        marginTop: 30,
        width:330,
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
export default Details;