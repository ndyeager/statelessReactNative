import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon } from 'native-base';

class HeaderComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}

module.exports = HeaderComponent;
