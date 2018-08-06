// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NumberWrap = styled.div`
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.white};
  width: 80px;
  height: 80px;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Number = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Sec = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// MODULE
export default class CountDown extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    };
    this.timer = 5;
  }

  componentDidMount() {
    const { onCountDownFinish } = this.props;
    this.setState({ timer: this.timer });

    this.interval = setInterval(() => {
      if (this.state.timer <= 1) {
        clearInterval(this.interval);
        onCountDownFinish();
        return;
      }
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  render() {
    const { timer } = this.state;

    return (
      <Wrap>
        <NumberWrap>
          <Number>{timer}</Number>
          <Sec>sec</Sec>
        </NumberWrap>
        <span>Before next round</span>
      </Wrap>
    );
  }
}

// Props Validation
CountDown.propTypes = {};
