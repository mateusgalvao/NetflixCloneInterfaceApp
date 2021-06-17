import React from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

import log from "../../assets/o.png";


const Header = () => {
    return (
        <LinearGradient style={styles.header} colors={['rgba(0,0,1,1)','rgba(0,0,0,0)']}>
            <Image style={styles.hero}source={log}>
                 </Image>
            <View style={styles.headerSafeAreaView}>
            
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient >
    );
};

export default Header;

