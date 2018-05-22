import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, Tab, Tabs, Drawer } from 'native-base';

export default class MenuHeader extends React.Component {

    state = {
      fontLoaded: false,
      drawer:null,
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
            <Header hasTabs={this.props.isHasTab}>
              <Left>
              <Button transparent
                  onPress={this.props.drawer}
              >
                <Icon name='menu' />
              </Button>
              </Left>
              <Body>
                <Title>{this.props.title}</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='search' />
                </Button>
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