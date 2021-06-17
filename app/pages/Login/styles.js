
import { ImageBackground, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bgDrck:{
        backgroundColor:'#000',
        flex:1,
        justifyContent: 'center',
        padding: 20,
    },
    logo:{
        flex: 1,
    backgroundColor:"#FFF",
    },
    textInput: {
        height: 50, 
        borderRadius:20,
        borderEndWidth:20,
        borderLeftWidth:20,
        borderColor: '#000', 
        borderWidth: 1,
        marginBottom:20,
    },
    textInputButton:{ height: 40, 
        borderRadius:50,
        
        borderEndWidth:20,
        borderLeftWidth:20,
        borderColor: '#000', 
        borderWidth: 1,
        marginBottom:1,
   },
   recSenha:{
    alignSelf:'flex',
    borderWidth: 30,
    borderRadius:30,
   }

});

export default styles;