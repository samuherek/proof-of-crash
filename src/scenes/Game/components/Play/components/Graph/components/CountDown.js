// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,255,255, 0.4);
  }

  70% {
      box-shadow: 0 0 0 30px rgba(255,255,255, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(255,255,255, 0);
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NumberWrap = styled.div`
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.white};
  width: 120px;
  height: 120px;
  border-radius: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  box-shadow: 0 0 0 rgba(66, 207, 160, 0.4);
  animation: ${pulse} 1s infinite;
  animation-delay: 0.8s;
`;

const Number = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Ubuntu Mono', sans-serif;
`;

const Sec = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Note = styled.span`
  margin-top: 35px;
  opacity: 0.5;
`;

// MODULE
export default class CountDown extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    };
    this.timeout = 5;
  }

  componentDidMount() {
    const { onCountDownFinish } = this.props;
    this.setState({ timer: this.timeout });

    this.interval = setInterval(() => {
      if (this.state.timer <= 1) {
        clearInterval(this.interval);
        onCountDownFinish();
        return;
      }
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timer } = this.state;

    return (
      <Wrap>
        <NumberWrap>
          <Number>{timer}</Number>
          <Sec>sec</Sec>
        </NumberWrap>
        <Note>Countdown before next round</Note>
      </Wrap>
    );
  }
}

// Props Validation
CountDown.propTypes = {};
