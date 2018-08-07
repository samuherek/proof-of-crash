// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Bet from './components/Bet';
import Graph from './components/Graph';

// ACTIONS/CONFIG
import {
  disablePlayerEntry,
  enablePlayerEntry,
  activateCrash
} from '../../../../actions/uiActions';
import { connect } from '../../../../../node_modules/react-redux';

// MODULE
class Play extends Component {
  constructor() {
    super();
    this.state = {
      playCounterValue: 1,
      crashAt: Math.floor(Math.random() * 1000) / 100 + 1,
      interval: 30
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
  }

  startPlay() {
    this.props.disablePlayerEntry();
    this.setNewCrashValue();
    this.setState({ playCounterValue: 1 });

    this.playInterval = setInterval(() => {
      if (this.state.crashAt > this.state.playCounterValue) {
        this.setState({ playCounterValue: +(this.state.playCounterValue + 0.01).toFixed(2) });
      } else {
        clearInterval(this.playInterval);
        this.setState({ playing: false });
        this.handlePlayFinish();
      }
    }, this.state.interval);
  }

  handlePlayFinish() {
    this.props.activateCrash();
    setTimeout(() => {
      this.props.enablePlayerEntry();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.resetTimer);
    clearInterval(this.playInterval);
  }

  render() {
    // console.log(this.state);
    const { playCounterValue, crashAt, playing } = this.state;
    return [
      <Graph
        playCounterValue={playCounterValue}
        crashAt={crashAt}
        onPlayFinish={this.handlePlayFinish}
        onCountDownFinish={this.handleCountDownFinish}
        udateCounter={this.updateCounterForOtherComponents}
        playing={playing}
        key="graph"
      />,
      <Bet key="bet" playCounterValue={playCounterValue} />
    ];
  }
}

// Props Validation
Play.propTypes = {
  enablePlayerEntry: PropTypes.func,
  disablePlayerEntry: PropTypes.func
};

const mapStateToProps = state => {
  return {
    playerEntryActive: state.ui.playerEntryActive
  };
};

export default connect(
  mapStateToProps,
  { enablePlayerEntry, disablePlayerEntry, activateCrash }
)(Play);
