import React from 'react';
import {Text, View, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native';

import { Title } from "react-native-paper";

import styles from './styles';

import logon from "../../assets/legi.jpeg";
import log from "../../assets/log.png";



const Secao = ( {secao, hasTopBorder}) => {
    return (
        <View style={styles.container}>
            {hasTopBorder && <View style={styles.borderTop}></View>}

            <Title style={styles.secaoTitle}>
                Nome da Seção
            </Title>
            <FlatList
            style={styles.Lista}
            horizontal
            data={secao}
            renderItem={({item, index}) => (
                <TouchableOpacity key={index}>
                <ImageBackground 
                style={[styles.capa, {marginRight:10, marginLeft: index === 0 ? 20:0}]} 
                source={{uri: item.capa}}>
                    <Image resizaMode="contain"style={{uri: item.logo}}source={log}/>
                </ImageBackground>
                </TouchableOpacity>

            )}
            />
           
        </View>
    );
};

export default Secao;