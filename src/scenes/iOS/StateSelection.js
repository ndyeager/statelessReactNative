import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';

class StateSelection extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>Are You Registered to Vote in the Following State?</Text>
        </View>
        <View style={styles.maincontainer}>
          <Text style={styles.welcome}>State Selection</Text>
        </View>
        <View style={styles.footerconainer}></View>
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
  headercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  headerText : {
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 40,
  },
  maincontainer : {
    flex: 5
  },
  footercontainer : {
    flex: 1
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

module.exports = StateSelection;
