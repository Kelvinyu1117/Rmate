import React from 'react';
import { Font } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, text, Drawer } from 'native-base'
import { StyleSheet, Text, View, } from 'react-native';
import MenuHeader from '../../components/header/menuHeader';
import SideBar from '../../components/sideBar/sideBar';

export default class ConnectScreen extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('../../assets/fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  openDrawer() {
    this._drawer._root.open();
  }
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
              <MenuHeader isHasTab={false}
                title="Connect"
                onPress={() => this.openDrawer()}
              />
              <Content>
                <Text> I am Connect Screen</Text>
              </Content>
            </Drawer>
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