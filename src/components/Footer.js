import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class Footer extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon1}>
          <Icon name="ios-home" size={20} color= "#e74c3c" style={{textAlign: 'center'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon2}>
          <Icon name="ios-finger-print" size={20} color= "#7f8c8d" style={{textAlign: 'center'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon3}>
          <Icon name="ios-globe-outline" size={20} color= "#7f8c8d" style={{textAlign: 'center'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon4}>
          <Icon name="ios-chatbubbles-outline" size={20} color= "#7f8c8d" style={{textAlign: 'center'}}/>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderTopWidth:1,
    borderTopColor:'rgba(189, 195, 199,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1:{
    flex:1,
    justifyContent: 'center'
  },
  icon2:{
    flex:1,
    justifyContent: 'center'
  },
  icon3:{
    flex:1,
    justifyContent: 'center'
  },
  icon4:{
    flex:1,
    justifyContent: 'center'
  }
});

module.exports = Footer;
