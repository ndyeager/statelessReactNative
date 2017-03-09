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

discussionJSON = {name:'Discussion'}

class BackgroundImage extends Component{
  render(){
    return(
      <Image source={require('../assets/iOS/images/discussionImg.png')} style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    );
  }
}

class Overlay extends Component{
  render(){
    return(
      <View style={styles.textcontainer}>
        <View style={styles.headerContainer} >
          <View style={styles.headerLeftContainer}>
            <Icon style={{marginRight:5}} name='ios-clock-outline' size={10} color='white'/>
            <Text style={styles.textHeader}>5 mins ago</Text>
          </View>
          <View style={styles.headerRightContainer}>
            <Text style={styles.textHeader}>Immigration</Text>
          </View>
        </View>
        <View style={styles.textcontainerMain} >
          <View style={styles.DiscussionHeaderContainer}>
            <Text style={styles.DiscussionHeaderText}>DISCUSSION:</Text>
          </View>
          <View style={styles.DiscussionSubHeaderContainer}>
            <Text style={styles.DiscussionSubHeaderText}>
              Should a country founded by people seeking a better life deny
              others who are seeking the same dream, or in the current hostile
              enviroment, immigration should be treated as a national security
              issue?
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer} >
          <View style={styles.footerRightContainer}>
            <TouchableOpacity>
              <View style={styles.picturecontainer}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.byText}>By Amanda Carella</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerLeftContainer}>
            <TouchableOpacity>
              <Icon style={{marginLeft:15, marginRight:15, backgroundColor:'transparent'}} name="ios-menu-outline" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={{marginLeft:15, marginRight:15, backgroundColor:'transparent'}} name="ios-chatbubbles" size={30} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={{marginLeft:15, marginRight:15, backgroundColor:'transparent'}} name="ios-heart-outline" size={30} color="white"/>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    );
  }
}

class DiscussionComponent extends Component {
  render(){
    return(
      <View style={styles.container}>
        <BackgroundImage>
          <Overlay>
          </Overlay>
        </BackgroundImage>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    height:200,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  backgroundImage:{
    flex:1,
    height:null,
    width: null,
    resizeMode: 'cover'
  },
  textcontainer:{
    flex:1,
    // backgroundColor: 'rgba(230, 126, 34,0.5)',
  },
  headerContainer:{
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  headerLeftContainer:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    backgroundColor:'transparent'
  },
  headerRightContainer:{
    flex:1,
    marginRight: 10,
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },

  textHeader:{
    fontSize:9,
    color: 'white',
  },
  textcontainerMain:{
    flex:6,
  },
  DiscussionHeaderContainer:{
    flex: 1,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: 'transparent'
  },
  DiscussionHeaderText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent'

  },
  DiscussionSubHeaderContainer:{
    flex:3,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent'
  },
  DiscussionSubHeaderText:{
    color: 'white',
    fontSize: 14,
  },
  textcontainerFooter:{
    flex:2,
    paddingBottom:5,
    backgroundColor: 'transparent'
  },

  picturecontainer:{
    backgroundColor: 'rgba(189, 195, 199,1.0)',
    width: 41,
    height: 41,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white'
  },
  creatorText:{
    color:'white',
    fontSize: 14,
    paddingLeft: 5
  },
  text : {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 32
  },

  footerContainer:{
    flex:2,
    paddingBottom:5,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },

  footerRightContainer:{
    flex: 2,
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: 'transparent'
  },

  footerLeftContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor: 'transparent'
  },

  picturecontainer:{
    backgroundColor: 'rgba(189, 195, 199,1.0)',
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white'
  },

  byText:{
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  }


});

module.exports = DiscussionComponent;
