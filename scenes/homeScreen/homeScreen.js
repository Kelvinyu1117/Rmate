import React from 'react';
import { Font } from 'expo';
import { Container, Button, Icon, Title, Content, Spinner, Tab, Tabs, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideBar from '../../components/sideBar/sideBar';
import MenuHeader from '../../components/header/menuHeader';
import JoinedEvents from '../joinedEventScreen/joinedEvents';
import UpcomingEvents from '../upcomingEventsScreen/upcomingEvents';



export default class HomeScreen extends React.Component {

  state = {
    fontLoaded: false,
  }

  // load the font after the component is mounted
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('../../assets/fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  // open the drawer
  openDrawer() {
    this._drawer._root.open();
  }

  // close the drawer
  closeDrawer() {
    this._drawer._root.close();
  }

  render() {
    return (
      this.state.fontLoaded ?
        (
          <Container>
            <Drawer
              ref={(ref) => { this._drawer = ref; }}
              content={<SideBar navigator={this.navigator} />}
              onClose={() => this.closeDrawer()} >
              <MenuHeader
                isHasTab={true}
                title="Events"
                onPress={() => this.openDrawer()}
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
            </Drawer>
          </Container>
        ) :
        (
          <Container>
            <Content>
              <Spinner color='blue' />
            </Content>
          </Container>
        ));
  }
}

