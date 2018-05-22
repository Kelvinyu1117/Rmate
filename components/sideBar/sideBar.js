import React from 'react';
import {View} from 'react-native'
import { Font } from 'expo';
import {Container, Content, List, ListItem, Button, Icon, Spinner,Text} from 'native-base';
import {Avatar} from 'react-native-elements';

//Define different routes for navigation
const routes = ['Events','Profile', 'People', 'Connect', 'Space'];

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
        this.state.fontLoaded?
        (
          <Container>
            <Content style={{backgroundColor: '#ffffff'}}>
                  <Avatar rounded
                    large
                  />
                <List dataArray={routes}
                    renderRow={data => {
                        return(
                            <ListItem
                                button>
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}
                >
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
