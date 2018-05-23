import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem, Left, Button, Icon, Right } from 'native-base'


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
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ fontStyle: 'bold' }}>Big datathon</Text>
                                <Text note> May 26, 2018 </Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44479692%2F214068951195%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C3416%2C1708&s=6ceb952e965dbd708fba2c5af4c0336c' }} style={{ height: 120, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Text>Learn More</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>3 days left</Text>
                            </Right>
                        </CardItem>
                    </Card>
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
