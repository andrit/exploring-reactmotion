import React, { Component } from 'react';
import './App.css';

import Menu from './Menu';
import SpringEgg from './SpringEgg';
import Entrance from './Entrance';

class App extends Component {
  state={
    useBootstrap: false
  }
  setBootstrap = (bool) => {
    this.setState({
      useBootstrap: bool
    })
  }
  render() {
    const {useBootstrap} = this.state;
    return (
      <div className={useBootstrap ? "container" : "app-wrap"}>
        <Entrance setBootstrap={this.setBootstrap}>Welcome to AndrewRitter.me</Entrance>
      </div>
    );
  }
}

export default App;
