import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';

var testList = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eight', 'Nineth', 'Tenth'];

import { Actions, Scene, Router } from 'react-native-router-flux';
import axios from 'axios';
import sunlight from '../../utilities/SunlightAPI';

var statesArray = []
class Account extends Component {
  constructor(props){
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(statesArray),
      isLoading: true
    }
  }

  componentDidMount(){
    sunlight.getStates().then((res) => {
      statesArray = res;
      this.setState({
        datasource:this.state.dataSource.cloneWithRows(statesArray),
        isLoading:false
      });
    });
  }

    renderRow(rowData, sectionID, rowID){
      return(
        <TouchableHighlight underlayColor='grey' style={{paddingTop:40,height:50}}>
          <View>
            <Text style={{fontSize: 20, color:'black'}} numberOfLines={1}>{rowData}</Text>
            <View style={{height:1}}/>
          </View>
        </TouchableHighlight>
      );
    }



  render() {
    console.log(statesArray);
    console.log(this.state.dataSource);
    console.log(this.state.isLoading);
    return (
      <View style={styles.container}>
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}>
      </ListView>
        <TouchableHighlight
          style={{
            backgroundColor:'red',
            justifyContent: 'center',
            alignItems:'center',
            height:40,
            width:350,
            borderRadius : 4
          }}
          onPress={this._sunlightAPI}>
          <Text style={{color:'white'}}>Create an account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  registerButton : {
    backgroundColor: 'blue',
    width: 300,
    padding: 15,
    borderRadius : 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  siginInButton : {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 15,
    borderRadius : 4
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Account;
