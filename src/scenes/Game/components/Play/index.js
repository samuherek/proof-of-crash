// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// COMPONENTS
import Bet from './components/Bet';
import Graph from './components/Graph';

// ACTIONS/CONFIG

// MODULE
export default function Play({
  playCounterValue,
  crashAt,
  onPlayFinish,
  onCountDownFinish,
  udateCounter
}) {
  return [
    <Graph
      playCounterValue={playCounterValue}
      crashAt={crashAt}
      onPlayFinish={onPlayFinish}
      onCountDownFinish={onCountDownFinish}
      udateCounter={udateCounter}
      key="graph"
    />,
    <Bet key="bet" playCounterValue={playCounterValue} />
  ];
}

// Props Validation
Play.propTypes = {
  playCounterValue: PropTypes.number,
  crashAt: PropTypes.number,
  handlePlayFinish: PropTypes.func,
  onCountDownFinish: PropTypes.func,
  udateCounter: PropTypes.func,
  enablePlayerEntry: PropTypes.func,
  disablePlayerEntry: PropTypes.func
};
