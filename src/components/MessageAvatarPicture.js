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

class MessageAvatarPicture extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.picturecontainer}/>
        <Icon style={styles.textIcon} name='ios-text' size={30} color='#3498db' />
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  picturecontainer:{
    backgroundColor: 'rgba(189, 195, 199,1.0)',
    width: 41,
    height: 41,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white'
  },
  textIcon:{
    position: 'absolute',
    top: 15,
    left: 20,
    backgroundColor:'transparent',

  },
});

module.exports = MessageAvatarPicture;
