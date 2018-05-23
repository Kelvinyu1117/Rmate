import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, text} from 'native-base'
import { StyleSheet, Text, View, } from 'react-native';
import BackwardHeader from '../../components/header/backwardHeader'


export default class EventDetailsScreen extends React.Component {

    state = {
      fontLoaded: false,
    }
    
    static navigationOptions = {
      drawerLabel: 'EventDetails'
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
                <BackwardHeader
                title="Event Details"
                onPress={() => this.props.navigation.goBack()}
                />
              <Text> I am Event Details </Text>
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