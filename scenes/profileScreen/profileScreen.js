import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, text} from 'native-base'
import { StyleSheet, Text, View, } from 'react-native';
import MenuHeader from '../../components/header/menuHeader';

export default class ProfileScreen extends React.Component {

    state = {
      fontLoaded: false,
    }
    
    static navigationOptions = {
      drawerLabel: 'Profile'
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
            <Container>
              <MenuHeader isHasTab={false}
                title="Profile"
                drawer={() => this.props.navigation.openDrawer()}
              />
              <Content>
                <Text> I am Profile Screen</Text>
              </Content>
            </Container>
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