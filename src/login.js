import React,{Component} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"


export default class Login extends Component{

  constructor(){
    super();
    this.state ={
      name: null
    }
  }
  updateValue(Username){
    this.setState({name : Username})


  }
  
  render(){
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/hu.jpg')}
      style={styles.backgroundimage}>
        <Image source={require('../images/new.png')}
        style={styles.logo}>
          </Image>
          <Text style={styles.textView}>instagram</Text>
           
           <TextInput style={styles.inputview}
           placeholder= "Username"
           placeholderTextColor="green"
           maxLength={10}
           onChangeText={(Username)=>this.updateValue(Username)}>
           </TextInput>
           <TextInput style={styles.inputview}
           placeholder="password"
           placeholderTextColor="green"
           secureTextEntry={true}
           maxLength={5}>

           </TextInput>
           <TouchableHighlight style={styles.buttonView} 
           underlayColor='transparent'
           onPress={()=> this.props.navigation.navigate('Drawercont',{Username:this.state.name})}>
            <Text style={styles.buttontext}>login

            </Text>
           </TouchableHighlight>
           

      </ImageBackground>
    </View>
    )
  }
}
  
  


const styles = StyleSheet.create({
  container : {
    height: '100%',
    width : '100%',
    backgroundColor: 'black',
   },
  backgroundimage:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100
  },
  textView:{
    fontSize:20,
    fontWeight: 'bold',
    color:'red'
  },
  inputview:{
    width:"30%",
    height:"5%",
    borderWidth:1,
    borderColor:'green',
    marginTop:20,
    justifyContent:'center',
    paddingLeft:20

  },
  buttonView:{
    width:'60%',
    height:'5%',
    backgroundColor:'green',
    marginTop:20,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'


  },
  buttontext:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  }

})
