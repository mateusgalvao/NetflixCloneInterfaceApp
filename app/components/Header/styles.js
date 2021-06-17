import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textWhite: {
        color:'#fff',
    },
    header: {
        position: "absolute",
        width: '100%',

        top: 0,
        zIndex:3,
        
    },
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginLeft:40,
        width: '100%',
        height: 70,
        alignItems:'center'
        
        
    },
    hero:{
        flex: 10,
        marginTop: 5,
        width: 70,
        height: 70,
        position: 'absolute',
    },
   
});


export default styles;