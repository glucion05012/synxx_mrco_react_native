import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Alert, Linking, CheckBox  } from 'react-native';
import { styles } from '../src/styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
   
    createTwoButtonAlert = () =>
    Alert.alert(
      "Notification",
      "You clicked login button",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch',
            }}>
               
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image 
                        source={require('../src/logo/mm.jpg')}
                        style={{
                            width: 300,
                            height: 150,
                            marginTop: 60,
                            marginBottom: 40,
                        }} 
                    
                    />
                </View>

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',}}>

                    <View>   
                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email"
                        placeholderTextColor = "gray"
                        autoCapitalize = "none"/>
                    </View>
                    <View >
                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        secureTextEntry={true}
                        placeholderTextColor = "gray"
                        autoCapitalize = "none"/>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',}}>
                        
                        <View style={{ flexDirection: 'row', marginRight:80 }}>
                            <CheckBox
                            
                            />
                            <Text style={{color: '#FC7112', marginTop: 5.5}}>Remember Me</Text>
                        </View>
                        <View>
                            <Text style={{color: '#FC7112', marginTop: 5.5}}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Forgot Password?
                            </Text>
                        </View>
                        
                    </View>
 
                    <View>
                        <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.createTwoButtonAlert}
                        >
                            <Text style = {styles.submitButtonText}> Log In </Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Text style={{textAlign: "center"}}>or</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',}}>
                    <Icon style={{ margin:10 }} onPress={() => Linking.openURL('http://facebook.com')} name="facebook-square" size={50} color="blue"/>
                    <Icon style={{ margin:10 }} onPress={() => Linking.openURL('https://accounts.google.com')} name="google" size={50} color="red"/>
                    </View>
                </View>
            </View>
        )
    }
}