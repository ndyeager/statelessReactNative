import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';

class TabView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Tabs</Text>
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
  registerButton : {
    backgroundColor: 'blue',
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

module.exports = TabView;
