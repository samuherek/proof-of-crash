import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import globals from './styles/global';

// COMPONENTS
import Game from './scenes/Game';
import Auth from './scenes/Auth';
import Account from './scenes/Account';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/account" component={Account} />
        <Route exact path="/play" component={Game} />
        <Redirect to="/play" />
      </Switch>
    );
  }
}

export default App;
