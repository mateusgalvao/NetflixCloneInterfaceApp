import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:20,

    },
    flacontainer:{
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom:30,
    },
    oval:{
        backgroundColor:'red',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius:90,

    },
    buttonText:{
        fontSize:20,
        marginLeft:20,
        color: '#fff',
    },
    capa:{
        height: 85,
        width: 85,
        borderRadius:85,
    },
    logo:{
        width:90,
        height: 45,
        position: "absolute",
        zIndex:10,
        bottom: 10,
        alignSelf: 'center',
    },
    previacontainer:{
        width: '100%',
    }, 
    gradient: {
        width: '100%',
        height: 60,
        position: 'absolute',
        zIndex:9,
        bottom: 0,
    },

  
});

export default styles;
   