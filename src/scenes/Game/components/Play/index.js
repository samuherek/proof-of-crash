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
      playCounterValue: 1,
      crashAt: Math.floor(Math.random() * 1000) / 100 + 1,
      interval: 30,
      playing: false
    };

    this.times = 1;
    this.handleCountDownFinish = this.handleCountDownFinish.bind(this);
    this.handlePlayFinish = this.handlePlayFinish.bind(this);
    this.startPlay = this.startPlay.bind(this);
    this.udpatePlayerCounter = this.udpatePlayerCounter.bind(this);
    this.setNewCrashValue = this.setNewCrashValue.bind(this);
  }

  setNewCrashValue() {
    this.setState({ crashAt: (Math.floor(Math.random() * 1000) / 100 + 1).toFixed(2) });
  }

  udpatePlayerCounter() {
    const { playCounterValue } = this.state;
    this.setState({ playCounterValue: +(playCounterValue + 0.01).toFixed(2) });
  }

  handleCountDownFinish() {
    this.startPlay();
    this.setState({ countDown: false, playing: true });
  }

  startPlay() {
    this.setNewCrashValue();
    // this.setState({ playCounterValue: 1 });

    // this.playInterval = setInterval(() => {
    //   if (this.state.crashAt > this.state.playCounterValue) {
    //     this.setState({ playCounterValue: +(this.state.playCounterValue + 0.01).toFixed(2) });
    //   } else {
    //     clearInterval(this.playInterval);
    //     this.setState({ playing: false });
    //     this.handlePlayFinish();
    //   }
    // }, this.state.interval);
  }

  handlePlayFinish() {
    setTimeout(() => {
      this.setState({ countDown: true });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.resetTimer);
    clearInterval(this.playInterval);
  }

  render() {
    // console.log(this.state);
    const { countDown, playCounterValue, crashAt, playing } = this.state;
    return [
      <Graph
        playCounterValue={playCounterValue}
        crashAt={crashAt}
        countDown={countDown}
        onPlayFinish={this.handlePlayFinish}
        onCountDownFinish={this.handleCountDownFinish}
        udateCounter={this.updateCounterForOtherComponents}
        playing={playing}
        key="graph"
      />,
      <Bet key="bet" isCountDonw={countDown} playCounterValue={playCounterValue} />
    ];
  }
}

// Props Validation
Play.propTypes = {};
