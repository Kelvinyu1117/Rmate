import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, text} from 'native-base'
import { StyleSheet, Text, View, } from 'react-native';
import MenuHeader from '../../components/header/menuHeader';

export default class PeopleScreen extends React.Component {

    state = {
      fontLoaded: false,
    }
    
    static navigationOptions = {
      drawerLabel: 'People'
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
                title="People"
                drawer={() => this.props.navigation.openDrawer()}
                />
              <Text> I am people screen </Text>
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