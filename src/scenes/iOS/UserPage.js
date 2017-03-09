import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  View,
  Image,
  AsyncStorage,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

import Modal from 'react-native-modalbox';
var TopBackground = require('../../components/TopBackground');
var ProfilePicture = require('../../components/ProfilePicture');
var Searchbar = require('../../components/Searchbar');
var Dropdown = require('../../components/Dropdown');
var Footer = require('../../components/Footer');
var DiscussionComponent = require('../../components/DiscussionComponent');
var CongressComponent = require('../../components/CongressComponent');
var UserActivityComponent = require('../../components/UserActivityComponent');

const ACCESS_TOKEN = 'access_token';

class UserPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
      profile_picture: ''
    }
  }
  componentWillMount(){
      this.getToken(ACCESS_TOKEN);
  }

  async getToken(accessToken){
    try{
      let token = await AsyncStorage.getItem(accessToken);
      this.setState({token:token});
      this.getUserProfile();
      return token;
    } catch(error) {
        console.log("Something went wrong")
        return null;
    }
  }

  async getUserProfile(){
    try {
      let response = await fetch('http://127.0.0.1:5000/api/v1/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.state.token
        })
      });

      let res = await response.text();

      if(response.status >= 200 && response.status < 300){
        let jsonRes = JSON.parse(res);
        this.setState({
          profile_picture : jsonRes.profile_pic
        });

      } else {
        let errors = res;
        throw errors;
      }
    } catch(errors) {
      console.log('Catch errors is: ' + errors);
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
      <TopBackground>
        <View style={styles.container}>
          <View style={styles.topToolbarContainer}>
            <ProfilePicture/>
            <Searchbar/>
            <Dropdown />
          </View>
          <View style={styles.content}>
            <View style={styles.contentContainer}>
              <ScrollView>
                <DiscussionComponent />
                <UserActivityComponent />
                <CongressComponent />
                <DiscussionComponent />
                <UserActivityComponent />
                <UserActivityComponent />
                <UserActivityComponent />
                <DiscussionComponent />
                <DiscussionComponent />
              </ScrollView>
            </View>
          </View>
          <View style={styles.footer}>
            <Footer />
          </View>
        </View>
      </TopBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,0.5)',

  },
  footer:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent: 'center',
    height: 50
  },
  error:{
    color: 'red'
  },
  topToolbarContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 7,
    paddingLeft: 7,
  },
  content:{
    flex:12,
    // backgroundColor: 'rgba(231, 76, 60,0.5)',
  },
  contentContainer: {

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
