import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Record extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Recordtext}>Record page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
    
    },
    Recordtext:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
        
    }
})