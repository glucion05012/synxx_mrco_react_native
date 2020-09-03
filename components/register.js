import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../src/styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class Register extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {

            name: '',
            email: '',
            password: '',
            
            //validation
            nameError: '',
            emailError: '',
            passwordError: '',
        }
    }

    validate = () => {
        let nameError = '';
        let passwordError = '';
        let emailError = '';

        if (this.state.name.length === 0) {
            nameError = "*Field is required..";
        } else if (this.state.name.length < 4) {
            nameError = "*Minimum of 4 characters required.";
        }

        if (this.state.password.length === 0) {
            passwordError = "*Field is required..";
        } else if (this.state.password.length < 8) {
            passwordError = "*Password should be 8 characters.";
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.length === 0) {
            emailError = "*Field is required..";
        }else if(reg.test(this.state.email) === false) {
                emailError = "Invalid Email";
        }


        if (nameError || passwordError || emailError) {
            this.setState({ nameError, passwordError, emailError });
            return false;
        }
        return true;
    }

    submitRegister(){
        const isValid = this.validate();
        if (isValid) {
            
            axios.post('http://loginapi.foursquare.org.ph/create/'+ this.state.name +'/'+this.state.email +'/'+this.state.password)
                .then(response => {
                    this.setState({
                        isLoading: false,
                        dataSource: response.data
                    })
                }) 
           
            alert('You have successfully registered\n'+this.state.name+'!');

            this.setState({

                name: '',
                email: '',
                password: '',

                 //validation
                nameError: '',
                emailError: '',
                passwordError: '',
            })
            
        }
    
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',}}>

                
                <View>
                    <Icon  style={{alignSelf : "center", marginTop:10}} name="id-card-o" size={50} color="#FC7112"/>
                    <Text style={{alignSelf : "center" }} >Personal Details</Text>
                    
                </View>
                
                <View>   
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Name"
                    placeholderTextColor = "gray"
                    onChangeText={(text)=>{this.setState({name:text}) }}
                    value={this.state.name}
                    />
                    <Text style={styles.error}>{this.state.nameError}</Text>
                </View>
                <View>   
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "gray"
                    autoCapitalize = "none"
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    value={this.state.email}
                    />
                    <Text style={styles.error}>{this.state.emailError}</Text>
                </View>
                <View >
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    secureTextEntry={true}
                    placeholderTextColor = "gray"
                    autoCapitalize = "none"
                    onChangeText={(text)=>{this.setState({password:text}) }}
                    value={this.state.password}
                    />
                    <Text style={styles.error}>{this.state.passwordError}</Text>
                </View>

                <View>
                    <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => { this.submitRegister() }}
                    >
                        <Text style = {styles.submitButtonText}> Register </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}