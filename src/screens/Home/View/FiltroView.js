import React, { useState } from 'react';
import { View,TextInput, StyleSheet, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native';

import DatePickerComponent from '../Component/CampoData';
import PriceRangeSlider from '../Component/FaixaDePreco';


const Filtro = ()=> {
    
    return ( 
        <View style={styles.container}>
            <View style = {styles.campo}>
                <TextInput
                    style={styles.input}
                    
                />
                <Image
                    source= {require("../../../assets/imagens/lupa-preta.png")}
                    style={{ width: 24, height: 24 }}
                    />
            </View>
          
            <View style = {styles.containercategoria}>
                <View style= {styles.categoria}>
                    <Image
                        source= {require("../../../assets/imagens/exposicao.png")}
                        style={{ width: 30, height: 30 }}
                        />
                    <Text>
                        Exposição    
                    </Text> 
                </View>
                <View style= {styles.categoria}>
                    <Image
                        source= {require("../../../assets/imagens/drink.png")}
                        style={{ width: 30, height: 30 }}
                            />
                        <Text>
                            Drinks   
                        </Text> 
                </View>
                <View style= {styles.categoria}>
                    <Image
                        source= {require("../../../assets/imagens/bolinho.png")}
                        style={{ width: 30, height: 30 }}
                        />
                    <Text>
                        Comida    
                    </Text> 
                </View>
            
            </View>


            <View style = {styles.data}>
                <DatePickerComponent/>
            </View>  

           <PriceRangeSlider/>

           <View style ={styles.conteudoInferior}>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../../assets/imagens/estrela.png')} style = {{width: 24, height: 24, marginEnd: 20}}></Image>
                    <Text style = {{color: 'white'}}>Ta Bombando</Text>
                </View>            
                
                <View style={styles.containerBottom}>
                    <View style= {styles.retangulo}>
                        <View style={styles.quadrado}>
                            <Image source={require('../../../assets/imagens/giro.png')} style={styles.image}></Image>
                        </View>
                        <View >
                            <Text style = {styles.texto}>Top 10</Text>
                            <Text style = {styles.texto}>eventos</Text>
                        </View>
                        <Image source={require('../../../assets/imagens/coracao.png')} style={styles.image}></Image>


                    </View>
                </View>
                <View>
                    <View style= {styles.retangulo}>
                        <View style = {styles.quadrado}>
                            <Image source={require('../../../assets/imagens/giro.png')} style={styles.image}></Image>
                        </View>
                        <View>
                            <Text style = {styles.texto}>Favoritos </Text>
                            <Text style = {styles.texto}>dos Cappys</Text>
                        </View>
                       
                        <Image source={require('../../../assets/imagens/coracao-preto.png')} style={styles.image}></Image>


                    </View>
                </View>
           </View>
        </View>
       
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flexDirection:'colum',
        padding: 16,
        marginTop: 40,
        marginEnd: 20,
        marginStart: 20
      },
      input: {
        height: 40,
        width: 300,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginEnd: 8,
        borderRadius: 20,
      },
      campo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,

      },
      categoria:{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
      },

      containercategoria: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginEnd: 20,
        marginStart: 20
      },
      image: {
        width: 33,
        height: 33,
      },
      conteudoInferior:{
            flexDirection: 'column',
            width: 320,
            height:320,
            borderWidth: 2,
            borderColor: 'black',
            paddingTop: 30,
            paddingStart: 20,
            paddingEnd: 40,
            justifyContent: 'space-around',
            backgroundColor: 'black',
            paddingBottom: 20

      },

      containerBottom:{
        flexDirection: 'column',
      },
      retangulo:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      quadrado: {
        width: 60,
        height: 60 ,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CFCBCB'
      },
      texto:{
        color: 'black',
        fontSize: 16
      }
    });

export default Filtro;