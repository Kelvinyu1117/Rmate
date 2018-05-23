import React from 'react';
import { Font } from 'expo';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem } from 'native-base'
import JoinedEventCard from '../cards/joinedEventCard'

export default class JoinedEvents extends React.Component {

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
            <Content>
              <List>
                <ListItem>
                  <JoinedEventCard />
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
