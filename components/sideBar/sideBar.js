import React from 'react';
import { View } from 'react-native'
import { Font } from 'expo';
import { Container, Content, List, ListItem, Button, Icon, Spinner, Text } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
//Define different routes for navigation
const routes = ['Events', 'Profile', 'People', 'Connect', 'Space'];



export default class SideBar extends React.Component {

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
      this.state.fontLoaded ?
        (
          <Container>
            <Content style={{ backgroundColor: '#ffffff' }}>
              <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Avatar rounded
                  large
                />
              </View>
              <List>
                <ListItem
                  button
                  onPress={() => Actions.event()}>
                  <Text>{routes[0]}</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => { Actions.profile()}}>
                  <Text>{routes[1]}</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => { Actions.people()}}>
                  <Text>{routes[2]}</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => { Actions.connect()}}>
                  <Text>{routes[3]}</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => { Actions.space()}}>
                  <Text>{routes[4]}</Text>
                </ListItem>
                <ListItem
                  button>
                  <Text>Logout</Text>
                </ListItem>
              </List>
            </Content>
          </Container>
        ) : (
          <Container>
            <Content>
              <Spinner color='blue' />
            </Content>
          </Container>
        )

    );
  }
}
