import React from 'react';
import { Expo, Font } from 'expo';
import { View, Image, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Spinner, Tab, Tabs, Text } from 'native-base';

export default class LoginScreen extends React.Component {

    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('../../assets/fonts/Roboto_medium.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    _googleLogin = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: '619651598704-ga0oeq6vrgqbo205l7iebultn5qoufn1.apps.googleusercontent.com',
                iosClientId: '619651598704-boagk4kg7g23vm7mkj0h5k56e3r6q6qa.apps.googleusercontent.com',
                webClientId: '619651598704-h30k7prlkqumjhrrad7hfb3i0h6tlvaa.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            console.log(result);

            if (result.type === 'success') {
                console.log(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log(e);
            return { error: true };
        }
    }


    render() {
        return (
            this.state.fontLoaded ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fdfdfb',
                    }}
                >
                    <Image
                        style={{ width: 250, height: 250 }}
                        source={{ uri: 'https://i.imgur.com/TaHzn7a.jpg' }} />
                    <Text style={{ fontSize: 50, fontStyle: 'bold' }}> Rmates</Text>
                    <View
                        style={{
                            marginTop: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fdfdfb',
                        }}
                    >
                        <Button large
                            onPress={()=>this._googleLogin}>
                            <Text>SignIn with Google </Text>
                        </Button>
                    </View>
                </View>
            ) : (
                    <Container>
                        <Content>
                            <Spinner color='blue' />
                        </Content >
                    </Container >
                )
        )
    }
}