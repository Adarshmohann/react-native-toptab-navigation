import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profiletext}>Profile page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        
    },
    profiletext:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
        
    }
})