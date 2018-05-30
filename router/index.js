import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import Home from '../scenes/homeScreen/homeScreen';
import Profile from '../scenes/profileScreen/profileScreen';
import People from '../scenes/peopleScreen/peopleScreen';
import Connect from '../scenes/connectScreen/connectScreen';
import Space from '../scenes/spaceScreen/spaceScreen';
import EventDetails from '../scenes/eventDetailsScreen/eventDetailsScreen';
import SideBar from '../components/sideBar/sideBar';


const AppRouter = () => (
    <Router>
        <Scene key="root" hideNavBar={true}>
            <Scene key="event" component={Home} />
            <Scene key="profile" component={Profile} />
            <Scene key="people" component={People} />
            <Scene key="connect" component={Connect} />
            <Scene key="space" component={Space} />
            <Scene key="eventDetails" component={EventDetails} />
        </Scene>
    </Router>
);


export default AppRouter;