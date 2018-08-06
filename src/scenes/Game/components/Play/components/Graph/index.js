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
  render() {
    const { countDown, onCountDownFinish, onPlayFinish, crashAt, playCounterValue } = this.props;

    if (this.times > 2)
      return (
        <Wrap>
          <span>That is enough for now</span>
        </Wrap>
      );

    if (countDown) {
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
  }
}

// Props Validation
Graph.propTypes = {};
