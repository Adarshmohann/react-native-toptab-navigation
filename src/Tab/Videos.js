import React,{Component} from "react";
import { View,Text,StyleSheet ,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Videos extends Component{
     constructor(){
        super();
        this.state={
            headertext:'welcome vro'
        }

     }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollcont}>
                    <View style={styles.card}>
                        <Text>{this.state.headertext}</Text>

                    </View>
                    <View style={styles.cardwn}>
                        <View style={{flexDirection:'row'}}>
                        <Icon name='edit' size={16} color='black'/>
                        <Text>joshy</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                        <Icon name='edit' size={16} color='black'/>
                        <Text>joshy</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                        <Icon name='edit' size={16} color='black'/>
                        <Text>joshy</Text>
                         </View>

                    </View>
                    

                </ScrollView>

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
    scrollcont:{
        width:'100%',
        height:'100%'
    },
    card:{
        width:'95%',
        height:200,
        backgroundColor:'white',
        alignItems:'center',
        elevation:10,
        marginLeft:10,
        marginTop:10
    },
    cardwn:{
        padding:10,
        width:'95%',
        backgroundColor:'white',
        marginTop:20,
        marginLeft:10,
        elevation:10
    }
    
        
    
})