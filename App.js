import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { crerateStackNavigator, createStackNavigator } from 'react-navigation-stack';

// components/pages DECLARATION
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Overview from "./components/menu/overview";


const Navigator = createStackNavigator({
  Home:{
    screen: Home
  },
  Login:{
    screen: Login
  },
  Register:{
    screen: Register
  },
  Overview:{
    screen: Overview
  }
})
export default createAppContainer(Navigator)