import React, { Component } from 'react';

import GlobalStyles from './styles/global';

import Main from './pages/Main'
// import { Container } from './styles';

export default class App extends Component {
  render() {
    return (
      <>
      <Main />
    <GlobalStyles />
    </>
    );
  }
}

