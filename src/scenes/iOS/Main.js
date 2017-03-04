import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

const ACCESS_TOKEN = 'access_token';


var Home = require('./Home');
var Register = require('./Register');
var Login = require('./Login');
var UserPage = require('./UserPage');
var WelcomeScreen = require('./WelcomeScreen');
var Account = require('./Account');
var Demo = require('./Demo');
var Stream = require('./Stream');
var ImageUpload = require('./ImageUpload');
var GeolocationComponent = require('./GeolocationComponent');


class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key="home" title='Home' component={Home} hideNavBar={true}/>
          <Scene key="welcomescreen" title='Welcome Screen' component={WelcomeScreen} hideNavBar={true}/>
          <Scene key="imageupload" title='Image Upload' initial={true} component={ImageUpload} hideNavBar={true}/>
          <Scene key="geolocation" title='Geolocation' component={GeolocationComponent} hideNavBar={true}/>
          <Scene key="demo" title='demo' component={Demo} hideNavBar={true}/>
          <Scene key="stream" title='Stream' component={Stream} hideNavBar={true}/>
          <Scene key="userpage" title='User Page' component={UserPage} hideNavBar={true}/>
          <Scene key="register" title='Register' component={Register} hideBackImage={false} hideNavBar={false}
          navigationBarStyle ={{backgroundColor:'rgba(0,0,0,0)', borderBottomColor:'rgba(0,0,0,0)'}} title=""
          />
          <Scene key="login" title='Login' component={Login} hideBackImage={false} hideNavBar={false}
          navigationBarStyle ={{backgroundColor:'rgba(0,0,0,0)', borderBottomColor:'rgba(0,0,0,0)'}} title=""
          />
          <Scene key="account" title='Account' component={Account} hideBackImage={true} hideNavBar={false}
          navigationBarStyle ={{backgroundColor:'rgba(0,0,0,0)', borderBottomColor:'rgba(0,0,0,0)'}} title=""
          />

        </Scene>
      </Router>
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

module.exports = Main;
