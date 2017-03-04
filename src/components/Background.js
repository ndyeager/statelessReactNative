import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

class Overlay extends Component {
  render(){
    return(
      <Image source={require('../assets/iOS/images/overlay.png')} style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    );
  }
}

class BackgroundImage extends Component {
  render(){
    return(
      <View style={styles.background}>
        {this.props.children}
      </View>
    );
  }
}

class Background extends Component {
  render(){
    return(
      <BackgroundImage>
        <StatusBar barStyle='light-content'/>
        <Overlay>{this.props.children}</Overlay>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage : {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  background : {
    flex: 1,
    backgroundColor: '#34495E'
  },
  text : {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
});

module.exports = Background;
