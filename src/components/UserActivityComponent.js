import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var MessageAvatarPicture = require('./MessageAvatarPicture');


class UserActivityComponent extends Component {
  render(){
    return(
    <TouchableOpacity>
      <View style={styles.container}>
          <View style={styles.leftInnerContainer}>
            <MessageAvatarPicture />
          </View>
          <View style={styles.centerInnerContainer}>
              <Text style={{fontSize:14, fontWeight:'bold', color:'#2c3e50'}}>Rudolf Van Cruze</Text>
              <Text style={{fontSize:12, color:'#2c3e50'}}>Contributed to a discussion on gun control</Text>
          </View>
          <View style={styles.rightInnerContainer}>
            <View style={styles.rightInnerContainerRow1}>
              <Icon name='ios-clock-outline' size={10} color='#2c3e50'/>
              <Text style={{marginLeft:5, color:'#2c3e50', fontSize:9}}>15 mins ago</Text>
            </View>
            <View style={styles.rightInnerContainerRow2}>
              <Icon name='ios-arrow-forward' size={20} color='#2c3e50' />
            </View>
          </View>
      </View>
    </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    flexDirection:'row',
    height: 60,
    marginTop: 5,
    marginBottom: 5
  },
  leftInnerContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  centerInnerContainer:{
    flex:6,
    paddingLeft: 10,
    justifyContent:'center',
    backgroundColor: 'transparent'
  },
  rightInnerContainer:{
    flex:2,
    backgroundColor: 'transparent'
  },
  rightInnerContainerRow1:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor:'transparent',
  },
  rightInnerContainerRow2:{
    flex:2,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'transparent'
  },



});

module.exports = UserActivityComponent;
