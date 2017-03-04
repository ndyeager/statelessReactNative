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

var ListViewScene = require('./ListViewScene');
var sunlight = require('../../utilities/SunlightAPI');

class Demo extends Component{
  constructor(props){
    super(props);

    this.state = {
      states: []
    }
  }

  componentDidMount(){
    sunlight.getStates().then((data) => {
      _characters = [];
      _characters = _characters.concat(data);
      this.setState({
        states: _characters,
      });
    })
  }

  render(){
    return(
      <Container>
        <Header>
          <Left />
            <Body>
              <Title>States</Title>
            </Body>
          <Right />
        </Header>
        <Content>
          <Content>
            <ListViewScene />
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

module.exports = Demo;
