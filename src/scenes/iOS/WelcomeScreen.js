import React, { Component } from 'react';

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';

import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

var screen = Dimensions.get('window');

var Login = require('./Login');
var Register = require('./Register');

class WelcomePage extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  render() {
    var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[styles.btn, styles.btnModal]}>X</Button>;

    return (
      <View style={[styles.wrapper, styles.wrapper_container]}>
        <Button
        onPress={() => this.refs.modal2.open()}
        style={{
          margin: 10,
          backgroundColor:'#e74c3c',
          color: "white",
          padding: 10,
        }}>Create an account</Button>

        <Button
          onPress={() => this.refs.modal1.open()}
          style={{
            margin: 10,
            backgroundColor:'rgba(0,0,0,0.0)',
            borderWidth: 1,
            borderRadius: 1,
            borderColor: 'rgba(255, 255, 255,1)',
            color: "white",
            padding: 10
          }}>Sign In</Button>

        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={true}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
          <Login />
        </Modal>

        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal2"}
          swipeToClose={true}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
          <Register />
        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  wrapper_container:{
    justifyContent: 'center',
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal1:{
    backgroundColor: '#F3F3F3',
    marginTop: 30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

module.exports = WelcomePage;
