import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

export default nativebase_footer = () => {
    return(
        <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container> 
    );
}
/*
export default class nativebase_footer extends Component {
  render() {
    return (
        <Container>
          <Header />
          <Content />
          <Footer>
            <FooterTab>
              <Button>
                <Text>Apps</Text>
              </Button>
              <Button>
                <Text>Camera</Text>
              </Button>
              <Button active>
                <Text>Navigate</Text>
              </Button>
              <Button>
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
  }
}
*/