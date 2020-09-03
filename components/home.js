import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, Linking } from 'react-native';
import { styles } from '../src/styles/styles.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {

    AlertIcons = (name) =>
    Alert.alert(
      name,
      "The link will open in your\nmobile browser.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => Linking.openURL('http://google.com') }
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
                        source={require('../src/logo/meralco.png')}
                        style={{
                            width: 120,
                            height: 100,
                            marginTop: 20,
                            marginBottom: 40,
                        }} 
                    
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',}}>
                    
                    <View>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity = { .5 }
                        onPress={()=>{
                            this.props.navigation.navigate("Login")
                        }}
                    >
                        <Text style={styles.TextStyle}> Login </Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity = { .5 }
                        onPress={()=>{
                            this.props.navigation.navigate("Register")
                        }}
                    >
                        <Text style={styles.TextStyle}> Register </Text>
                    </TouchableOpacity>
                    </View>
                </View>
               
                {/* BUTTONS */}
                <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            }}>
                    <View style={{margin:20}}>
                    <Icon  onPress={() => this.AlertIcons('View/Report Outages')} style={{alignSelf : "center" }} name="warning" size={50} color="#FC7112"/>
                    <Text style={{alignSelf : "center" }}>{`View/Report\n    Outages`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Automatic Payment')} style={{alignSelf : "center" }} name="refresh" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`Automatic\n Payment`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Start a Service')} style={{alignSelf : "center" }} name="edit" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`Start a Service`}</Text>
                    </View>
                </View>

                <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            }}>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Activity Tracker')} style={{alignSelf : "center" }} name="clock-o" size={50} color="#FC7112"/>
                    <Text style={{alignSelf : "center" }}>{`Activity Tracker`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('FAQs')} style={{alignSelf : "center" }} name="question-circle-o" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`FAQs`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Business Centers')} style={{alignSelf : "center" }} name="map-marker" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`Business Centers`}</Text>
                    </View>
                </View>

                <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            }}>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Bright Ideas')} style={{alignSelf : "center" }} name="comment-o" size={50} color="#FC7112"/>
                    <Text style={{alignSelf : "center" }}>{`Bright Ideas`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Orange Tag')} style={{alignSelf : "center" }} name="tag" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`Orange Tag`}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <Icon onPress={() => this.AlertIcons('Appliance Calculator')}style={{alignSelf : "center" }} name="calculator" size={50} color="#FC7112" />
                    <Text style={{alignSelf : "center" }}>{`Appliance\nCalculator`}</Text>
                    </View>
                </View>

                
            </View>
        )

        
    }
}