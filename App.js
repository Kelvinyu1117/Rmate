import React from 'react';
import AppRouter from './router/index'
import Home from './scenes/homeScreen/homeScreen'
import Login from './scenes/loginScreen/loginScreen'
export default class App extends React.Component {

  render() {
    return (
      <AppRouter />
    );
  }
}


