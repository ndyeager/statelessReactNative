import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions, TouchableHighlight
} from 'react-native';

import Video from 'react-native-video';
import { Actions, Scene, Router } from 'react-native-router-flux';

var ImagePicker = NativeModules.ImageCropPicker;

class ImageUpload extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null,
      imageChosen: false
    };
  }

  pickSingleBase64() {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      useFrontCamera: true,
      cropping: true,
      includeBase64: true
    }).then(image => {
      console.log('received base64 image:', image);
      // this.pictureSubmit(image.data);
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  async pictureSubmit(image){
    console.log('Picture Function Runs');
    try {
      let response = await fetch('http://127.0.0.1:5000/api/v1/user/profile_picture', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          profile_picture:image,
        })
      });

      let res = await response.text();

      if(response.status >= 200 && response.status < 300){
        console.log('Response is: ' + res);
      } else {
        let errors = res;
        throw errors;
      }
    } catch(errors) {
      console.log('Catch errors is: ' + errors);
    }
  }

  buttonPressed(){
    console.log("Pressed");
    if (this.state.imageChosen == false){
      alert("No picture selected.")
    }
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  renderImage(image) {
    return <Image style={styles.image} source={image} />
  }

  renderAddImage(){
    return(<TouchableOpacity onPress={() => this.pickSingleBase64(false)}><Text style={styles.bodytext}>+</Text></TouchableOpacity>);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.headercontainer}>

          <Text style={styles.headertext}>Upload A Profile Picture</Text>

        </View>
        <View style={styles.bodycontainer}>
            {this.state.image ? this.renderAsset(this.state.image) : this.renderAddImage()}
        </View>
        <View style={styles.footercontainer}>
          <TouchableOpacity onPress={this.buttonPressed.bind(this)}
            style={{
            margin: 10,
            backgroundColor:'#e74c3c',
            color: "white",
            width: 385,
            padding: 10,
            alignItems: 'center',
            borderRadius: 4,
          }}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.stateselection}
            style={{
            margin: 10,
            backgroundColor:'rbga(0,0,0,0)',
            borderWidth: 1,
            borderRadius: 1,
            borderColor: 'rgba(255, 255, 255,1)',
            color: "white",
            width: 385,
            padding: 10,
            alignItems: 'center',
            borderRadius: 4,
          }}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(44, 62, 80,1)',
    paddingTop: 40,
  },
  headercontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodycontainer:{
    flex: 6,
    width: 380,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'rgba(255, 255, 255,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footercontainer:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodytext:{
    color: '#ecf0f1',
    fontSize: 250
  },
  headertext:{
    fontSize:22,
    color: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text:{
    color: 'white',
    fontSize: 22
  },
  image: {
    height: 300,
    borderRadius: 150,
    width: 300,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = ImageUpload;
