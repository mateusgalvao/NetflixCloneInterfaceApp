import React from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';
import { Caption } from "react-native-paper";

import log from "../../assets/download.png";

import styles from './styles'

const Episodeo = ()  => {
    return(
    <TouchableOpacity style={styles.container}> 
        <View style={styles.row}>
            <Image style={styles.capa} source={log}></Image>
            <View>
                <Text style={{color:'#fff'}}>1. Nome do episódio</Text>
                <Caption>
                    45 min.
                </Caption>
            </View>
        
        </View>
    <Caption>
    Pellentesque egestas ligula vel nunc rutrum euismod. 
    Pellentesque ut est convallis.
    </Caption>
    </TouchableOpacity>
    );
};

export default Episodeo;

