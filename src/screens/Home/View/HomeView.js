import React from 'react';
import { View, ScrollView , StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from '../Component/Card';
import CardTopo from '../Component/CardTopo';
import BottomNavBar from '../Component/Menu';
import TopBar from '../Component/TopBar';


const Home = ({navigation}) => {
    let item = {titulo :"Exposição Vila do Chaves", description: "avaliação de exemplo, com notas altas feitas pelos usuários"}
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
        title = {item.titulo}
        description="4.8" 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
      />
       <Card 
        title="Título do Card 1" 
        description="4.8" 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
      />
       <Card 
        title="Título do Card 1" 
        description="4.8" 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
      />
      <Card 
        title="Título do Card 2" 
        description="5.4." 
        imageUrl="https://via.placeholder.com/150"
        iconPath={require('../../../assets/imagens/image.png')}
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