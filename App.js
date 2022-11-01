import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Searchbar } from "react-native-paper"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import Login from "./src/login";
import Flexbox from "./src/Flexbox";
import Home from "./src/Drawer/Home";
import Profile from "./src/Drawer/Profile";
import Wallet from "./src/Drawer/Wallet";
import Record from "./src/Drawer/Record";
import Refund from "./src/Drawer/Refund";
import Settings from "./src/Drawer/Settings";
import About from "./src/Drawer/About";
import Help from "./src/Drawer/Help";
import Drawercont from "./src/Drawercont"

import Videos from "./src/Tab/Videos";
import Resources from "./src/Tab/Resources";
import Chapter from "./src/Tab/Chapter";
import Bank from "./src/Tab/QN Bank";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Homei from "./src/Bottom tab/Homei";
import Mesages from "./src/Bottom tab/Messages";
import Setting from "./src/Bottom tab/Setting";


const stack= createStackNavigator()
const Drawer= createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const BottomTab= createBottomTabNavigator()



function Mystack(){
  return(
    <stack.Navigator>
      <stack.Screen
      name="login"
      component={Login}
      options={{headerShown: false}}
      />
      <stack.Screen
      name ='Flexbox'
      component={Flexbox}
      options={{headerShown: false}}/>

      
      <stack.Screen
      name="Drawer"
      component={Mydrawer}
      options={{headerShown: false}} >

      </stack.Screen>
      <stack.Screen
      name="Tab"
      component={Mytab}
      options={{headerShown: false}}>

      </stack.Screen>
      <stack.Screen
      name="bottomtab"
      component={Mybottomtab}
      options={{headerShown: false}}
      />

    </stack.Navigator>
  )
}

function Mydrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen
      name='Home'
      component={Home}>

      </Drawer.Screen>
      <Drawer.Screen
      name="Profile"
      component={Profile}
   options={{headerShown: false}}>

      </Drawer.Screen>
      <Drawer.Screen
      name="Wallet Balance"
      component={Wallet}>

      </Drawer.Screen>
      <Drawer.Screen
      name="Records"
      component={Record}>


      </Drawer.Screen>
      <Drawer.Screen
      name="Refund and policies"
      component={Refund}>

      </Drawer.Screen>
      <Drawer.Screen
      name="Settings"
      component={Settings}>

      </Drawer.Screen>
      <Drawer.Screen
      name="About Us"
      component={About}>

      </Drawer.Screen>
      <Drawer.Screen
      name="Help"
      component={Help}>

      </Drawer.Screen>
      
    </Drawer.Navigator>
  )
}
function Mytab(){

  const[searchQuery,setSearchQuery] = React.useState('')
  const onChangeSearch= query=>setSearchQuery(query)

return(
    
    <View style={{height:'100%',width:'100%'}}>
    
    <Searchbar style={{backgroundColor:'white',borderRadius:20,height:'6%',width:'80%',marginLeft:35,marginBottom:20,marginTop:20,borderWidth:2,borderColor:'gray'}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      // value={searchQuery}
      />

    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12}
      }}>
      
      <Tab.Screen
      name='Videos'
      component={Videos} 
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="preview" size={22} color='red'/>:<Icon
        name="preview" size={22} color={'gray'}/>
      }}>

      </Tab.Screen>

      <Tab.Screen
      name="Chapter"
      component={Chapter}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="pages"  size={22} color='red'/>:<Icon
        name="pages" size={22}  color={'gray'}/>
      }}> 

      </Tab.Screen>
      <Tab.Screen name="Resources"
      component={Resources}
      options={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused? <Icon name="book" size={22} color='red'/>:<Icon
        name="book" size={22} color={'gray'}/>
      }}>
        </Tab.Screen>


        <Tab.Screen
        name="QN Bank"
        component={Bank}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'gray',
          tabBarIcon:({focused})=>
          focused? <Icon name="money" size={22}  color='red'/>:<Icon
          name="money" size={22} color={'gray'}/>
        }}>
        
      </Tab.Screen>
      

    </Tab.Navigator>
    
    </View>  
  )
}
function Mybottomtab(){
  return(
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelStyle:{fontSize:12},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'white'}
      }}>
        <BottomTab.Screen
        name="home"
        component={Homei}
        options={{
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'gray',
          tabBarIcon:({focused})=>
          focused? <Icon name="home" size={24} color='black'/>:<Icon name="home" size={24} color='gray'/>
    }}/>
    </BottomTab.Navigator>
  )
}


export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}