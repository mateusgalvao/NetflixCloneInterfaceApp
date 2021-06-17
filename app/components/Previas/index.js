import React from 'react';
import { View,TouchableOpacity, FlatList, Image,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import log from "../../assets/al.png";

import logi from "../../assets/log.png";

import styles from './styles';
        
const Previas = ({ filmes }) => {
    return ( 
        
        <View style={styles.container}>
            <Text style={styles.buttonText} >Previas</Text>
            <FlatList
            horizontal
            style={styles.flacontainer}
            data={filmes}
            renderItem={({item, index}) =>(
                <TouchableOpacity key={index}>
                    <View style={styles.oval}>
                        <Image style={styles.capa}source={{uri: item.capa}}></Image>
                        <Image resizeMode="contain"
                        style={styles.logo}source={{uri: item.logo}}></Image>
                        <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>

            )}>

            </FlatList>
        </View>

    );
};

export default Previas;