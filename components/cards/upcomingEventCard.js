import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Content, Spinner, Card, CardItem, Body, Text, List, ListItem, Left, Button, Icon, Right } from 'native-base'
import NewCardItem from '../cardItem/newCardItem'
import { Actions } from 'react-native-router-flux';

export default class JoinedEvents extends React.Component {

    state = {
        fontLoaded: false,
    }

    static navigationOptions = {
        title: 'UpcomingEvent',
    };

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
                            title="Affordable Art Fair 2018"
                            img="https://bit.ly/2L7ZqfA"
                            eventDate="May 18-20, 2018"
                        />
                        <NewCardItem
                            title="Cyberport University Partnership Programme (CUPP) 2018"
                            img="http://fintechnews.hk/wp-content/uploads/2018/03/Cyberport-Appoints-Peter-Yan-as-the-Chief-Executive-Officer-817x404_c.jpg"
                            eventDate="June 4, 2018"
                        />
                        <NewCardItem
                            title="Hong Kong Beauty & Fitness Expo 2018"
                            img="https://bit.ly/2sqrB1t"
                            eventDate="May 18-20, 2018"
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
