import React, {useEffect, useState} from 'react';
import {Container} from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ContainerList from '../../components/ContainerList';
import Previas from '../../components/Previas';
import Secao from '../../components/Secao';

import api from '../../services/api'



const Home = () => {

    const [principal, setPrincipal] = useState({});
    const [secoes, setSecoes] = useState([]);

    const getHome = async () => {
        try {
            const response = await api.get('/home');
            const res = response.data;
            alert(res.message)
            if (res.error) {
                
                return false;
            }

            setPrincipal(res.principal);
            setSecoes(res.secoes)


        } catch (err) {
            alert(err.message);

        }
    }
    useEffect(() => {
        getHome();
    }, [])

    return (
        <Container>
            <Header></Header>
                 <Hero filme={principal}></Hero>  
                 <ContainerList></ContainerList>
                 <Previas filmes={secoes[0]}></Previas> 
                 {secoes.map((secao, index) => (
                    <Secao secao={secao} hasTopBorder key={index}/>
                ))}
        </Container>
    );
};

export default Home;