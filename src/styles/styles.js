import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //HOME
    test: {
        color: 'red',
    },
    SubmitButtonStyle: {
        height:50,
        width:150,
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#FC7112',
        margin: 10,
      },
    TextStyle:{
        color:'#FC7112',
        alignSelf: 'center',
        lineHeight: 45
    },
     input: {
        margin: 10,
        height: 40,
        width:300,
        alignSelf:'center',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize:20,
     },
     submitButton: {
        borderRadius:50,
        backgroundColor: '#FC7112',
        padding: 10,
        margin: 15,
        height: 50,
        width: 300,
        alignSelf:'center'
     },
     submitButtonText:{
        color:'white',
        alignSelf: 'center',
        lineHeight: 30,
        fontWeight: "bold",
        fontSize:20,
        
     },
     error:{
        color:'red',
        marginLeft: 80,
    },
});