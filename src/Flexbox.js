import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    
}from 'react-native'
class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textcontent}>hi my name is{this.props.name}</Text>

            </View>
        )
    }
}

export default class Flexbox extends Component{
    constructor(){
        super();
        maintext:'hello'
    }

    componentDidMount(){
        console.log('THE USERNAME IS',this.props.route.params.Username)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello react native
            

                </Text>
                <TouchableHighlight style={styles.button}
                onPress={()=>this.props.navigation.navigate('Tab')}>
                <Text style={styles.buttontext}>click here</Text>

                </TouchableHighlight>
                <FlexContent name={this.props.route.params.Username}>

                </FlexContent>
                 </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    text: {
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    textcontent:{
        fontSize:22,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        borderRadius:8,
        backgroundColor:'green',
        fontSize:12,
        height:30,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,

    },
    buttontext:{
        color:'black',
        fontSize:12,
        fontWeight:'bold'

    }

})