import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Container, Footer, FootTab, Button, Left, Right, Body, Icon } from 'native-base';

class FooterComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FootTab>
        </Footer>
    );
  }
}

module.exports = FooterComponent;
