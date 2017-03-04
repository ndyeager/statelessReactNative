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

const ACCESS_TOKEN = 'access_token';

class UserPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
    }
  }
  componentWillMount(){
      this.getToken(ACCESS_TOKEN);
  }

  async getToken(accessToken){
    try{
      let token = await AsyncStorage.getItem(accessToken);
      this.setState({token:token});
      return token;
    } catch(error) {
        console.log("Something went wrong")
        return null;
    }
  }

onLogoutPressed(){
  this.deleteToken(ACCESS_TOKEN);
}


  async deleteToken(accessToken){
    try{
      await AsyncStorage.removeItem(accessToken);
      Actions.home();
    } catch(error) {
      console.log("Something went wrong");
    }
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome User!</Text>
      <Text style={styles.subtext}>Your token is: </Text>
      <Text style={styles.instructions}>{this.state.token}</Text>
      <TouchableHighlight
        style={{
          backgroundColor:'#e74c3c',
          justifyContent: 'center',
          alignItems:'center',
          height:40,
          width:380,
          borderRadius : 4
        }}
        onPress={this.onLogoutPressed.bind(this)}
        >
        <Text style={{color:'white'}}>Log Out</Text>
      </TouchableHighlight>
      </View>
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
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = UserPage;
