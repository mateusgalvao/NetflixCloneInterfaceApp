import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from "react-native-paper";

import { View,TouchableOpacity, Text } from "react-native";
import styles from './styles';

const ContainerList = () => {
    return (
        <View style={styles.menuHeader}>
            <TouchableOpacity style={styles.menuButton}>
                <Icon name="plus" color="#fff" size={20}></Icon> 
                <Text style={styles.buttonText}>Minha lista</Text>
                </TouchableOpacity>
                <Button style={styles.but}
                icon="play"
                mode="contained"
                color='#fff'
                uppercase={false}
                >Assistir</Button>
                <TouchableOpacity style={styles.menuButton}>
                <Icon name="information-outline" color="#000" size={20}></Icon> 
                <Text style={styles.buttonText}>Saiba mais</Text>
            </TouchableOpacity>
        </View>

    );
};

export default ContainerList;




