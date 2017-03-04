'use strict';

import React, {Component} from 'react';
import {
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Content,
  ListItem,
  Text
} from 'native-base';

import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class ListViewScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      isLoading: false,
      loaded: false
    };
  }

  componentDidMount(){
    this._states = [];
    this.fetchData();
  }

  fetchData(){
    fetch('https://openstates.org/api/v1/metadata/')
    .then((response) => response.json())
    .then((data) => {
      this._states = this._states.concat(data);

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._states),
        loaded: true,
        isLoading: false,
      });
    })
    .done();
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderState.bind(this)}
      />
    );
    }
    renderLoadingView(){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      );
  }

  renderState(state){
    return(
      <ListItem>
        <Text>{state.abbreviation.toUpperCase()} - {state.name}</Text>
      </ListItem>
    );
  }



}
module.exports = ListViewScene;
