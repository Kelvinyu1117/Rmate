import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, Tab, Tabs, Drawer } from 'native-base';

export default class backwardHeader extends React.Component {

    state = {
      fontLoaded: false,
    }
    
    async componentDidMount() {
      await Font.loadAsync({
        'Roboto_medium': require('../../assets/fonts/Roboto_medium.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }
  
    render() {
      return (
          this.state.fontLoaded?
          (
            <Header>
              <Left>
              <Button transparent
                  onPress={this.props.onPress}
              >
                <Icon name='arrow-back' />
              </Button>
              </Left>
              <Body>
                <Title>{this.props.title}</Title>
              </Body>
              <Right>
                {this.props.rightButton}
              </Right>
            </Header>
          ):(
                <Container>
                  <Content>
                    <Spinner color='blue' />
                  </Content>
                </Container>
            )
      );
    }
}