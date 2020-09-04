import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Icon } from 'react-native-elements'
import Icons from 'react-native-vector-icons/FontAwesome';

// components/pages DECLARATION
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Overview from "./components/menu/overview";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component{
  render(){

    const createHomeStack = ({ navigation }) => (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )

    const createOverviewStack = ({ navigation }) => (
      <Stack.Navigator>
        <Stack.Screen name="Overview" 
                      component={Overview} 
                      options={{
                        headerLeft: () => (
                          <Icon name="menu" size={35} onPress={() => navigation.openDrawer()} />
                        ),
                      }}/>

      {/* <Stack.Screen name="Overview" component={Overview} /> */}
      </Stack.Navigator>
  )

    

    return(
      <NavigationContainer>
        {/*edgeWidth={0} */}
         <Drawer.Navigator initialRouteName={Home} edgeWidth={0}>
          <Drawer.Screen name="Logout" 
                          children={createHomeStack}
                          options={{
                            drawerIcon: config => <Icons name="sign-out" size={35} color="#FC7112"  />}}
                           />
          <Drawer.Screen name="Overview" 
                          children={createOverviewStack} 
                          options={{
                            drawerIcon: config => <Icons name="search" size={35} color="#FC7112"  />}}
                           />
          <Drawer.Screen name="Accounts" 
                          children={createOverviewStack} 
                          options={{
                            drawerIcon: config => <Icons name="user-plus" size={35} color="#FC7112"  />}}
                           />
           <Drawer.Screen name="Bills and Payments" 
                          children={createOverviewStack} 
                          options={{
                            drawerIcon: config => <Icons name="money" size={35} color="#FC7112"  />}}
                           />
            <Drawer.Screen name="Consumption Reports" 
                          children={createOverviewStack} 
                          options={{
                            drawerIcon: config => <Icons name="bar-chart-o" size={35} color="#FC7112"  />}}
                           />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};