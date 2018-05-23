import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, Tab, Tabs, Drawer } from 'native-base'
import SideBar from '../../components/sideBar/sideBar';
import MenuHeader from '../../components/header/menuHeader';
import JoinedEvents from '../../components/tabs/joinedEvents';
import UpcomingEvents from '../../components/tabs/upcomingEvents';

export default class HomeScreen extends React.Component {

  state = {
    fontLoaded: false,
  }

  static navigationOptions = {
    drawerLabel: 'Home'
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
          <MenuHeader 
            isHasTab={true}
            title="Events"
            onPress={() => this.props.navigation.openDrawer()}
            rightButton={
              <Button transparent>
                <Icon name='add' />
              </Button>
            }
          />
          <Tabs initialPage={0}>
            <Tab heading="Joined">
              <JoinedEvents />
            </Tab>
            <Tab heading="Upcoming">
              <UpcomingEvents />
            </Tab>
          </Tabs>
        </Container>
      ):
        (
          <Container>
            <Content>
              <Spinner color='blue' />
            </Content>
          </Container>
        ));
  }
}

