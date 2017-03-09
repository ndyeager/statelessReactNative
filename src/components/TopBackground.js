import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

class TopBackground extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image source={require('../assets/iOS/images/top.png')} style={styles.backgroundImage}>
        </Image>
        <View style={styles.main}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage : {
    top: 0,
    left: 0,
    height: 70,

  },
  container: {
    flex:1,
  },
  main:{
    position:'absolute',
    top: 30,
    left: 0,
    bottom:0,
    right: 0,
    backgroundColor: 'rgb(243, 243, 243)',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flex:1
  },
  background : {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 60
  },
  text : {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});

module.exports = TopBackground;
