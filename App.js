import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { crerateStackNavigator, createStackNavigator } from 'react-navigation-stack';

// components/pages DECLARATION
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";


const Navigator = createStackNavigator({
  Home:{
    screen: Home
  },
  Login:{
    screen: Login
  },
  Register:{
    screen: Register
  }
})
export default createAppContainer(Navigator)