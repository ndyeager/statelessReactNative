import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';


import Button from 'react-native-button';

import { Actions, Scene, Router } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ACCESS_TOKEN = 'access_token';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
      token: ''
    }
  }

  async storeToken(accessToken){
    try{
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
      this.getToken();
    } catch(error) {
        console.log("Something went wrong in set")
    }
  }

  async getToken(accessToken){
    try{
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log("Token is: " + token)
    } catch(error) {
        console.log("Something went wrong is get")
    }
  }

  async onRegisterPressed(){
    console.log("Pressed");
    try {
      let response = await fetch('http://127.0.0.1:5000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:this.state.email,
          password: this.state.password,
          confirmPassword: this.state.password_confirmation,
        })
      });

      let res = await response.text();

      if(response.status >= 200 && response.status < 300){

          let loginToken = JSON.parse(res);
          let accessToken = loginToken.response.auth_token
          this.storeToken(accessToken);
          Actions.imageupload();
          console.log('Access Token is: ' + accessToken);

      } else {
        let errors = res;
        throw errors;
      }
    } catch(errors) {
      console.log('Catch errors is: ' + errors);

      let formErrors = JSON.parse(errors);
      let errorsArray = [];

      formErrors['response'].map(error => errorsArray.push(`${error}`))
      this.setState({errors:errorsArray});
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Register</Text>
          <TextInput
            style={{
              backgroundColor:'#bdc3c7',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'rgba(236, 240, 241,0.2)',
              margin:15,
              fontSize: 16,
              color: 'white',
              height: 40,
              paddingHorizontal: 10
            }}
            onChangeText={(text) => this.setState({email:text})}
            value={this.state.email}
            autoCapitalize='none'
            autoFocus={true}
            keyboardType='email-address'
            placeholder='Email Address'
            placeholderTextColor='white'
            returnKeyType='next'
            enablesReturnKeyAutomatically={true}
          />
          <TextInput
            style={{
              backgroundColor:'#bdc3c7',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'rgba(236, 240, 241,0.2)',
              margin:15,
              fontSize: 16,
              color: 'white',
              height: 40,
              paddingHorizontal: 10
            }}
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}
            autoCapitalize='none'
            autoFocus={true}
            keyboardType='default'
            placeholder='Password'
            placeholderTextColor='white'
            secureTextEntry={true}
            returnKeyType='next'
            enablesReturnKeyAutomatically={true}
          />
          <TextInput
            style={{
              backgroundColor:'#bdc3c7',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'rgba(236, 240, 241,0.2)',
              margin:15,
              fontSize: 16,
              color: 'white',
              height: 40,
              paddingHorizontal: 10
            }}
            onChangeText={(text) => this.setState({password_confirmation:text})}
            value={this.state.password_confirmation}
            autoCapitalize='none'
            autoFocus={true}
            keyboardType='default'
            placeholder='Confirm Password'
            placeholderTextColor='white'
            secureTextEntry={true}
            returnKeyType='next'
            enablesReturnKeyAutomatically={true}
          />
          <Button
          onPress={this.onRegisterPressed.bind(this)}
          style={{
            margin: 10,
            backgroundColor:'#e74c3c',
            color: "white",
            width: 385,
            padding: 10,
            borderRadius: 4,
          }}>
          Create an account
          </Button>

          <Errors errors={this.state.errors}/>
      </View>
    );
  }
}

const Errors = (props) => {
  return(
    <View>
      {props.errors.map((error, i) => <Text key={i} style={styles.error}>{error}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error:{
    alignItems: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 10
  },
  welcome: {
    fontSize: 30,
    color: '#ecf0f1',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Register;
