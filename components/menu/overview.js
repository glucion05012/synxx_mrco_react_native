import React, { Component } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default class Overview extends Component {
    _
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center'}}>
                    
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'}}>
                    
                    <View style={{ flex:2,flexDirection: 'column', 
                                    borderColor:'black', 
                                    borderWidth: 1,
                                    margin:15
                                    }}>   
                        <Text style={{ margin: 5.5, textAlign:'center'}}>Hi User!</Text>
                        <Icon  style={{alignSelf : "center", marginTop:10}} name="home" size={50} color="#FC7112"/>
                        <Text style={{ margin: 5.5, textAlign:'center' }}>Service No. 10001</Text>
                    </View>
                    <View style={{ flex:2,flexDirection: 'column', 
                                    borderColor:'black', 
                                    borderWidth: 1,
                                    margin:15
                                    }}>   
                        <Text style={{ margin: 5.5, textAlign:'center'}}>PHP 1000.00</Text>
                        <Text style={{ margin: 5.5, textAlign:'center'}}>Due Date: July 2, 2020</Text>
                        <Button
                        title="Pay Now"
                        color="gray"
                        />
                    </View>
                
            </View> 

            <View style={{ flexDirection: 'column', 
                                    borderColor:'black', 
                                    borderWidth: 1,
                                    margin:15
                                    }}>   
                        <Text style={{ margin: 5.5, textAlign:'center'}}>Your monthly electircity consumption chart</Text>
                        <LineChart
                            data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width-32} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="kW"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                        />
                        <Text style={{ margin: 5.5, textAlign:'center'}}>May or June kWh bar includes consumption from previous months</Text>
                        
                    </View>

            </View>

        )
    }
}