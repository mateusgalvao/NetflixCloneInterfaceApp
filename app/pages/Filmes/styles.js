import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     but:{
        marginVertical:20,
    },
    container:{
        flex: 1,
        backgroundColor:'#000',

    },
    capa:{
        height: 200,
        width: '100%',

    },
    containerPadding:{
        padding: 20,
    },
    captionInfos:{
        marginVertical:20,
    },
    menu:{
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:20,
    },
    captionWrite:{
        color: '#fff'
    },
    buttonTemporada:{
        width: '100%',
        padding: 10,
        borderRadius:3,
        backgroundColor:'rgba(255 ,255, 255, 0.08)',
        borderWidth: 1,
        borderColor:'rgba(255 ,255, 255, 0.21)',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:30,
    },
    temporadaName:{
        color:'#fff'
    },
});

export default styles;