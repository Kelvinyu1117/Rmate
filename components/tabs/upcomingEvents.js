import React from 'react';
import { Font } from 'expo';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem} from 'native-base'
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
        this.state.fontLoaded?
        (
          <Container>
            <Content>
              <List>
                <ListItem>
                  <Card>
                      <CardItem>
                      <Body>
                          <Text>
                            I am upcoming event.
                          </Text>
                      </Body>
                      </CardItem>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card>
                      <CardItem>
                      <Body>
                          <Text>
                            I am upcoming event.
                          </Text>
                      </Body>
                      </CardItem>
                  </Card>
                </ListItem>
              </List>
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
