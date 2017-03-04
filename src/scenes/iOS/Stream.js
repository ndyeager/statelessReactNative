import React, {Component} from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Header,
  Footer,
  Title,
  Content,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

var stream = require('getstream');


class Stream extends Component{
  constructor(props){
    super(props);

    this.state = {
      states: []
    }

  }

  componentWillMount(){
    var client = stream.connect('xp3697sbqdnm', null, '21816');
    var amanda = client.feed('user', 'amanda', '_Vk2fjF9_J3MVZhyOpQbwz-rMRQ' );

    function callback(data){
      console.log('The data returned', data);
    }

    function successCallback(data){
      console.log('now listening to changes in realtime');
      console.log('The data returned', data);
    }

    function failCallback(data){
      alert('Something went wrong, check the console logs');
      console.log(data)
    }

    amanda.subscribe(callback).then(successCallback, failCallback);

  }


  render(){
    return(
      <Container>
        <Header>
          <Left />
            <Body>
              <Title>Stream</Title>
            </Body>
          <Right />
        </Header>
        <Content>
          <Content>
          <Text>My text is here...</Text>
          </Content>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}

module.exports = Stream;
