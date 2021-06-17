import React from 'react';
import { Image, ImageBackground, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import logon from "../../assets/legi.jpeg";
import log from "../../assets/log.png";

import styles from './styles';

const Hero = ({ filme }) => {
    return (
        <ImageBackground style={styles.hero}
        source={{uri: filme.capa}}>
            <Image style={styles.logo}
        source={{uri: filme.logo}}>
        </Image>
        <View></View>
        <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}>

        </LinearGradient>

        </ImageBackground>
    );
};

export default Hero;

