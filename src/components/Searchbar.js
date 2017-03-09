import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'


class Searchbar extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View>
          <TextInput
            placeholder='search'
            placeholderTextColor='#bdc3c7'
            style={styles.searchcontainer} />
            <Icon style={styles.icon} name="search" size={13} color="#bdc3c7" />
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  searchcontainer:{
    backgroundColor: 'rgba(216, 216, 216,0.42)',
    marginTop: 5,
    marginLeft: 25,
    width: 280,
    height: 30,
    borderRadius: 15,
    fontSize: 14,
    color: '#bdc3c7',
    textAlign: 'center'
  },
  icon:{
    position:'absolute',
    top:14,
    left: 130,
    backgroundColor: 'transparent'
  }
});

module.exports = Searchbar;
