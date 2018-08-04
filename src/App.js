import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import globals from './styles/global';

// COMPONENTS
import Game from './scenes/Game';
import Auth from './scenes/Auth';
import Account from './scenes/Account';

export const AUTH_KEY = 'AUTHENTICATED';
export const AUTH_DATA = 'AUTH_DATA';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: false
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const localAuth = localStorage.getItem(AUTH_KEY);
    if (localAuth) {
      this.setState({ auth: true });
    }
  }

  handleLogIn() {
    this.setState({ auth: true });
  }

  handleLogOut() {
    const { history } = this.props;
    this.setState({ auth: false });
    history.push('/');
  }

  render() {
    const { auth } = this.state;

    if (!auth) {
      return <Auth onLogIn={this.handleLogIn} />;
    }

    return (
      <Switch>
        <Route exact path="/account" render={() => <Account onLogOut={this.handleLogOut} />} />
        <Route exact path="/play" component={Game} />
        <Redirect to="/play" />
      </Switch>
    );
  }
}

export default App;
