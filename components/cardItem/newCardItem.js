import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem, Left, Button, Icon, Right } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class newCardItem extends React.Component {

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

    render() {
        return(
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{this.props.title}</Text>
                            <Text note>{this.props.eventDate}</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: this.props.img }} style={{ height: 100, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={() => Actions.eventDetails()}>
                                <Text>Learn More</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
        );
    }
}