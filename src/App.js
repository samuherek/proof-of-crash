import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import globals from './styles/global';

// COMPONENTS
import Game from './scenes/Game';
import Auth from './scenes/Auth';
import Account from './scenes/Account';

// CONFIG
import theme from './styles/theme';
import crypto from './data/crypto';

export const AUTH_KEY = 'AUTHENTICATED';
export const AUTH_DATA = 'AUTH_DATA';

const getTheTokenTheme = token => {
  const currency = crypto.find(c => c.token === token);
  theme.colors.highlight = currency.color;
  return theme;
};

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
    const { activeToken } = this.props;

    if (!auth) {
      return <Auth onLogIn={this.handleLogIn} />;
    }

    return (
      <ThemeProvider theme={getTheTokenTheme(activeToken)}>
        <Switch>
          <Route exact path="/account" render={() => <Account onLogOut={this.handleLogOut} />} />
          <Route exact path="/play" component={Game} />
          <Redirect to="/play" />
        </Switch>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeToken: state.ui.activeToken
  };
};

export default connect(mapStateToProps)(App);
