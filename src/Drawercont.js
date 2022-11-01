import React,{Component} from "react";
import { View,Text,StyleSheet,Image, TouchableHighlight } from "react-native";

export default class Draw extends Component{
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.topvw}>
                    <View style={styles.rummy}>
                       

                        <Image style={styles.logo} 
                        source={require('../images/new.png')}></Image>
                        <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={styles.downbut}>
                            <Text style={styles.buttngcolor}>Invite</Text>
                        </TouchableHighlight>
                         </View>


                         </View>
                         <View>
                         <Text style={styles.textfavaz}>Favaz</Text>
                         <TouchableHighlight style={styles.buttong}>
                            <Text style={styles.buttngcolor}>Gold</Text>
                         </TouchableHighlight>
                         <View>
                            <Text style={styles.textg}>Total Coin</Text>
                            <Text style={styles.textr}>Coin: 20000</Text>
                            
                         </View>
                         
                         
                         </View>

                         
                         
                
                         

                </View>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Records')}>Records</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Refund and policies')}>Refund and policies</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('About Us')}>About Us</Text>
                <Text style={styles.icons}
                onPress={()=> this.props.navigation.navigate('Help')}>Help</Text>
                <Text style={{marginTop:70,marginLeft:100,fontWeight:'bold',fontSize:18}}>Logout</Text>
            

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    
    },
    icons:{
        fontSize:18,
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold'
    },
    topvw:{
        width:'100%',
        height:'30%',
        backgroundColor:'red',
        flexDirection:'row',
        
    },
    rummy:{
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:50,
    marginLeft:10,
        marginTop:10


        
    },
    logo:{
        height:'100%',
        width:'100%'
    },
    textfavaz:{
        flexDirection:'row',
        fontWeight:'bold',
        marginLeft:80,
        marginTop:20,
        color:'white',
        fontSize:22

    },
    buttong:{
        width:'45%',
        height:'10%',
        borderRadius:5,
        backgroundColor:'green',
        marginLeft:80,
        alignItems:'center',
        marginTop:10

    },
    buttngcolor:{
        color:'black',
        fontStyle:'italic'
    },
    downbut:{
        width:'45%',
        height:'25%',
        borderRadius:5,
        backgroundColor:'white',
        alignItems:'center',
        marginTop:60,

    },
    textg:{
        fontSize:16,
        marginLeft:80,
        color:'white',
        marginTop:80,
        fontWeight:'bold'
    },
    textr:{
        fontSize:16,
        marginLeft:80,
        color:'white',
        fontWeight:'bold'
    

    }
    
})