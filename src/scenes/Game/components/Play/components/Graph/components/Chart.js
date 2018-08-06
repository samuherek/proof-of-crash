// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = styled.span`
  font-size: 40px;
  font-family: 'Ubuntu Mono', sans-serif;
`;

const Crash = styled.span`
  font-size: 40px;
  color: red;

  span {
    font-family: 'Ubuntu Mono', sans-serif;
  }
`;

// MODULE
export default class Chart extends Component {
  constructor() {
    super();
    this.state = {
      interval: 20,
      playing: true
    };
  }

  componentDidMount() {
    let counter = 1;
    const { udateCounter } = this.props;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = "50px 'Ubuntu Mono'";
    this.ctx.fillStyle = 'white';
    this.ctx.textBaseline = 'middle';

    this.interval = setInterval(() => {
      if (this.props.crashAt > counter) {
        counter = +(counter + 0.01).toFixed(2);
        udateCounter(counter);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillText(
          `${String(counter.toFixed(2))}x`,
          this.canvas.width / 4,
          this.canvas.height / 2
        );
      } else {
        this.setState({ playing: false });
        clearInterval(this.interval);
      }
    }, this.state.interval);
  }

  componentDidUpdate() {
    if (!this.state.playing) this.props.onCrashFinish();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { playing } = this.state;

    return (
      <Wrap>
        {playing ? (
          <canvas
            ref={el => {
              this.canvas = el;
            }}
            height="200px"
            width="200px"
          />
        ) : (
          <Crash>
            Crashed @ <span>{this.props.crashAt}</span> x
          </Crash>
        )}
      </Wrap>
    );
  }
}

// Props Validation
Chart.propTypes = {};
