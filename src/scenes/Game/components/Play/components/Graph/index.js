// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Chart from './components/Chart';
import CountDown from './components/CountDown';
import { connect } from '../../../../../../../node_modules/react-redux';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  min-height: 250px;
  height: 40vh;
`;

// MODULE
const Graph = ({
  playerEntryActive,
  onCountDownFinish,
  onPlayFinish,
  crashAt,
  playCounterValue
}) => {
  if (playerEntryActive) {
    return (
      <Wrap>
        <CountDown onCountDownFinish={onCountDownFinish} />
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Chart onCrashFinish={onPlayFinish} crashAt={crashAt} playCounterValue={playCounterValue} />
    </Wrap>
  );
};

// Props Validation
Graph.propTypes = {
  playerEntryActive: PropTypes.bool,
  onCountDownFinish: PropTypes.func,
  onPlayFinish: PropTypes.func,
  crashAt: PropTypes.number,
  playCounterValue: PropTypes.number
};

const mapStateToProps = state => {
  return {
    playerEntryActive: state.ui.playerEntryActive
  };
};

export default connect(mapStateToProps)(Graph);
