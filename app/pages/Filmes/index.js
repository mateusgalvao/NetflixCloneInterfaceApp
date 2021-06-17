import React, {useState} from 'react';
import styles from './styles';

import { 
    ScrollView, 
    ImageBackground, 
    View, 
    TouchableOpacity, 
    Text,
    FlatList} 
    from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title, Button, Paragraph, Caption, Dialog, Portal } from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Episodeo from '../../components/Episod';


import logon from "../../assets/legi.jpeg";

const Filmes = () => {
    const [tipo] = useState('serie');
    const [visible, setVisible] = React.useState(false);
    const [temporada, seTemporada] = useState({value:1, label:'Temporada'})

    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
    
    return (

        <>
            <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
        
        <ScrollView style={styles.container}> 
            <ImageBackground 
            style={styles.capa}
            source={logon}
            >

            </ImageBackground>
            <View style={styles.containerPadding}>
                <Title>Filmes</Title>
                <Button style={styles.but}
                icon="play"
                mode="contained"
                color='#FFF'
                uppercase={false}
                >Assistir</Button>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                    ac libero in sapien fringilla mattis congue sed arcu. Fusce enim nisi,
                    consequat a tortor vel.
                    </Paragraph>
                        <Caption style={styles.captionInfos}>
                            Elenco:{' '}
                            <Caption style={styles.captionWrite}>
                            Pellentesque, Lectus, Turpis, Interdum, Tristique. 
                            </Caption> 
                            Generos:{' '} <Caption style={styles.captionWrite}>Ut molestie dui vel leo faucibus, id imperdiet lacus accumsan. </Caption>{' '}
                            
                            Cenas e momentos: {' '}<Caption style={styles.captionWrite}>Violentos</Caption>{' '}
                        </Caption>
                <View style={styles.menu}>
                    <ButtonVertical icon="plus" text="Minha lista "/>
                    <ButtonVertical icon="thumb-up" text="Classifique"/>
                    <ButtonVertical icon="send" text="Compartilhe"/>
                    <ButtonVertical icon="download" text="Baixar"/>

                </View>
                {tipo === 'serie' && (
                <>
                <TouchableOpacity 
                onPress={showDialog}
                style={styles.buttonTemporada}>
                    <Text style={styles.temporadaName}>{temporada.label}</Text>   
                    <Icons name="chevron-down" color="#fff" size={20}></Icons>
                </TouchableOpacity>
                <FlatList
                    data={[1,2,3,4]}
                    renderItem={({ item, index}) => <Episodeo key={index}/>}></FlatList>
                </>
            )}
            </View>
            {tipo === 'filme' && <Secao hasTopBorder></Secao>}
            
        </ScrollView>
</>
    );
};

export default Filmes;
