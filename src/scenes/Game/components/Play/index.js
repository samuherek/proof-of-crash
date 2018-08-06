// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Bet from './components/Bet';
import Graph from './components/Graph';

// ACTIONS/CONFIG

// MODULE
export default class Play extends Component {
  constructor() {
    super();
    this.state = {
      countDown: true,
      counterValue: 1,
      crashAt: Math.floor(Math.random() * 1000) / 100 + 1
    };

    this.times = 1;
    this.handleCountDownFinish = this.handleCountDownFinish.bind(this);
    this.handlePlayFinish = this.handlePlayFinish.bind(this);
    this.updateCounterForOtherComponents = this.updateCounterForOtherComponents.bind(this);
  }

  setNewCrashValue() {
    this.setState({ crashAt: Math.floor(Math.random() * 1000) / 100 + 1 });
  }

  handleCountDownFinish() {
    this.setState({ countDown: false });
  }

  handlePlayFinish() {
    this.resetTimer = setInterval(() => {
      this.times = this.times + 1;
      this.setState({ countDown: true });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.resetTimer);
  }

  render() {
    const { countDown } = this.state;
    return [
      <Graph
        crashAt={this.state.crashAt}
        countDown={countDown}
        onPlayFinish={this.handlePlayFinish}
        onCountDownFinish={this.handleCountDownFinish}
        udateCounter={this.updateCounterForOtherComponents}
        key="graph"
      />,
      <Bet key="bet" isCountDonw={countDown} counterValue={this.counter} />
    ];
  }
}

// Props Validation
Play.propTypes = {};
