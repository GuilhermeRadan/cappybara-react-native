import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';


import Home from './src/screens/Home/View/HomeView';
import Details from './src/screens/Home/View/DetailsView';
import Filtro from './src/screens/Home/View/FiltroView';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconSource;

        if (route.name === 'Home') {
          iconSource = focused
            ? require('./src/assets/imagens/botao-home.png')
            : require('./src/assets/imagens/botao-de-inicio-clicado.png');
        } else if (route.name === 'Filtro') {
          iconSource = focused
            ? require('./src/assets/imagens/lupa-preta.png')
            : require('./src/assets/imagens/lupa-cinza.png');
        } else if (route.name === 'Details') {
          iconSource = focused
            ? require('./src/assets/imagens/calendario.png')
            : require('./src/assets/imagens/calendario.png');
        }

        return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
      },
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        position: 'absolute',    // Para permitir a personalização
        bottom: 10,              // Espaço da borda inferior da tela
        left: 10,                // Espaço da borda esquerda
        right: 10,               // Espaço da borda direita
        borderColor: 'black',    
        backgroundColor: '#fff', // Cor de fundo
        borderRadius: 20,        // Borda arredondada nos cantos
        height: 70,              // Altura da barra
        borderTopWidth: 0,       // Remova a borda superior padrão
        shadowColor: '#000',     // Adiciona sombra (opcional)
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,            // Elevação para sombras no Android
      },
    })}
    screenListeners={({ navigation, route }) => ({
      tabPress: (e) => {
        if (route.name === 'Details') {
          e.preventDefault(); // Impede a navegação para essa aba
          Toast.show({
            type: 'info',
            text1: 'Funcionalidade em Construção',
          });
        }
      },
    })}
  >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Filtro" component={Filtro} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}