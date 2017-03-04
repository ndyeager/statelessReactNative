import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';
var Background = require('../../components/Background');
var WelcomeScreen = require('./WelcomeScreen');

const ACCESS_TOKEN = 'access_token';

class Home extends Component {
  componentWillMount(){
    this.getToken(ACCESS_TOKEN);
  }

  async getToken(TOKEN){
    try{
      let accessToken = await AsyncStorage.getItem(TOKEN);
       if (!accessToken) {
         console.log('Token not set');
       } else {
         // verify token
         console.log('Token is set');
         Actions.userpage();
       }
    } catch(error) {
      console.log("Something went wrong")
    }
  }

  render() {
    return (
      <Background>
        <WelcomeScreen/>
      </Background>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  error:{
    color: 'red'
  },
  inputContainer: {
    color:'gray',
    height:40,
    borderColor: 'gray',
    backgroundColor:'white',
    borderWidth: 0.5,
    margin:15,
    padding:10,
    borderRadius:5
  },

  registerButton : {
    backgroundColor: '#2980b9',
    width: 300,
    padding: 15,
    borderRadius : 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  siginInButton : {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 15,
    borderRadius : 4
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Home;
