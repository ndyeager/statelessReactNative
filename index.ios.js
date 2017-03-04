import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var App = require('./src/components/iOS/App')


export default class StateLess extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('StateLess', () => StateLess);
