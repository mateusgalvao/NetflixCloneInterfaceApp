import React, { useState, useEffect } from 'react';
import { TextInput, Button , ActivityIndicator} from 'react-native-paper';
import {View,Image, ImageBackground} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api'

import styles from './styles';
import log from '../../assets/logoo.png'

const Login = ({navigation}) => {

    // 0 - carregando, 1 - logado, 2 - deslogado
    const [logged, setLogged] = useState(0);

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    });

    const chekLogin = async () => {
        // para limpar os dados AsyncStorage.clear();
        const user = await AsyncStorage.getItem('@user');
        if (user) {
            setLogged(1);
            navigation.replace('Home');
        }else { 
            setLogged(2);
        }
    };


    const login = async () => {
        try{

            const response = await api.post('/usuario/login', credenciais )
            const res = response.data;
            console.log(res)
            if (res.error) {
                alert(res.message);
                return false;
            }
            await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
            navigation.replace('Home');


        } catch (err) {
            alert(err.message);
        }

    };

    useEffect (() => {
        chekLogin();
    }, []);

    return (
       <View style={styles.bgDrck}>
       <ImageBackground style={styles.logo}source={log}/>
           <TextInput    
        mode="flat"
        style={styles.textInput}

        label="Email ou número de telefone"
        value={credenciais.email}
        onChangeText={text => setCredenciais({...credenciais, email:text})}
    />
    {logged === 0 && <ActivityIndicator color="#fff" size="large"></ActivityIndicator>}

    {logged === 2 && <View>
    <TextInput
    style={styles.textInput}
      label="Senha"
      secureTextEntry
      value={credenciais.senha}

      onChangeText={text => setCredenciais({...credenciais, senha:text})}
    />
    <Button 
    mode="contained"
    style={styles.textInputButton}
    onPress={() => login() }>
        Entrar
    </Button>
    <Button 
    style={styles.recSenha}
    raised onPress={() => console.log('Pressed')}
    theme={{colors: { primary: '#fff'}}}>
        Recuperar senha
    </Button>

    </View>}
    

    </View>

    );
};

export default Login;