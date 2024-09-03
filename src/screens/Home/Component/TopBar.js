import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopBar = ({iconLogo, iconLocation, textLocation, iconArrow, iconConfig}) =>{
    return(
        <View style = {styles.container}>
            {iconLogo && <Image source={iconLogo}  />}
            {iconLocation && <Image source={iconLocation}  />}
            <Text style={styles.text}>{textLocation}</Text>
            {iconArrow && <Image source={iconArrow}  />}
            {iconConfig && <Image source={iconConfig}  />}

        </View>
    );


};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    text:{
        fontSize: 20,
        color:'black'
    },

});

export default TopBar;