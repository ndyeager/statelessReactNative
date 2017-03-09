import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

class ProfilePicture extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.picturecontainer}/>
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
  }
});

module.exports = ProfilePicture;
