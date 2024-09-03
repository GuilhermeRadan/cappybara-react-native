import React from 'react';

import Details from "./src/screens/Home/View/DetailsView";
import Home from "./src/screens/Home/View/HomeView";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}  />
        <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


