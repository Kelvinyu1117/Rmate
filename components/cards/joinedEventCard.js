import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem, Left, Button, Icon, Right } from 'native-base'
import NewCardItem from '../cardItem/newCardItem'

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
                    <Content>
                        <NewCardItem
                            title="Big datathon"
                            img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44479692%2F214068951195%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C3416%2C1708&s=6ceb952e965dbd708fba2c5af4c0336c"
                            eventDate="May 26, 2018"
                        />
                    </Content>

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
