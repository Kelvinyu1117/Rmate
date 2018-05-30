import React from 'react';
import { Font } from 'expo';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem } from 'native-base'
import UpcomingEventCard from '../../components/cards/upcomingEventCard'


export default class UpcomingEvent extends React.Component {

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
                  <UpcomingEventCard />
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
