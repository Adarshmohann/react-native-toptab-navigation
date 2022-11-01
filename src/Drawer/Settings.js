import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>Settiings page</Text>

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
    hometext:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
        
    }
})