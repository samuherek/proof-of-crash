import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Route component={App} />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);
