// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
class Chart extends Component {
  constructor() {
    super();
    this.drawCanvas = this.drawCanvas.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = "50px 'Ubuntu Mono'";
    this.ctx.fillStyle = 'white';
    this.ctx.textBaseline = 'middle';
  }

  componentDidUpdate() {
    if (this.props.enableCounter) {
      this.drawCanvas();
    }
  }

  drawCanvas() {
    const { playCounterValue } = this.props;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillText(
      `${String(playCounterValue.toFixed(2))}x`,
      this.canvas.width / 4,
      this.canvas.height / 2
    );
  }

  render() {
    const { enableCounter } = this.props;

    return (
      <Wrap>
        {enableCounter ? (
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
Chart.propTypes = {
  enableCounter: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    enableCounter: !state.ui.playerEntryActive && !state.ui.crashActive
  };
};

export default connect(mapStateToProps)(Chart);
