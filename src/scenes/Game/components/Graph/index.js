// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Chart from './components/Chart';
import CountDown from './components/CountDown';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  min-height: 250px;
  height: 40vh;
`;

// MODULE
export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      countDown: true
    };
    this.handleCountDownFinish = this.handleCountDownFinish.bind(this);
  }

  handleCountDownFinish() {
    this.setState({ countDown: false });
  }

  render() {
    const { countDown } = this.state;

    if (countDown) {
      return (
        <Wrap>
          <CountDown onCountDownFinish={this.handleCountDownFinish} />
        </Wrap>
      );
    }

    return (
      <Wrap>
        <Chart />
      </Wrap>
    );
  }
}

// Props Validation
Graph.propTypes = {};
