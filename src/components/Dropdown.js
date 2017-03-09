import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

class Dropdown extends Component {
  render(){
    return(
      <TouchableOpacity>
        <Icon style={styles.dropdowncontainer} name="arrow-drop-down-circle" size={27} color="rgba(231, 76, 60,1.0)" />
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  dropdowncontainer:{
    marginTop: 5,
    marginLeft: 25,
    backgroundColor: 'transparent'
  }
});

module.exports = Dropdown;
