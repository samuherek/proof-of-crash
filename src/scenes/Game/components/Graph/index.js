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
  min-height: 300px;
  height: 50vh;
`;

// MODULE
export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      width: 500,
      height: 300,
      xPosition: 20,
      yPosition: 20,
      rectWidth: 150,
      rectHeight: 50
    };
  }

  componentDidMount() {
    const canvas = this.graph;
    canvas.style.backgroundColor = 'black';
    this.canvasContext = canvas.getContext('2d');
    this.resetBoard();
  }

  resetBoard = () => {
    // clearInterval(this.downInterval) //clear timer
    this.removeRect(); //clear canvas
    this.setState({
      xPosition: 20,
      yPosition: 20,
      rectWidth: 150,
      rectHeight: 50
    });
    this.drawShape();
    //restart timer
    // this.downInterval = setInterval(()=>{
    //   this.computerMove()
    // },this.state.timerInterval)
  };

  drawShape = () => {
    this.canvasContext.fillStyle = 'red';
    this.canvasContext.strokeStyle = '#42CFA0';
    this.canvasContext.lineWidth = 2;
    this.canvasContext.shadowOffsetX = 0;
    this.canvasContext.shadowOffsetY = 0;
    this.canvasContext.shadowBlur = 15;
    this.canvasContext.shadowColor = 'white';
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(0, 300);
    this.canvasContext.lineTo(500, 0);
    // this.canvasContext.fillRect(
    //   this.state.xPosition,
    //   this.state.yPosition,
    //   this.state.rectWidth,
    //   this.state.rectHeight
    // );
    this.canvasContext.stroke();
  };

  removeRect = () => {
    const { width, height } = this.state;
    this.canvasContext.clearRect(0, 0, width, height);
  };

  render() {
    const { width, height } = this.state;
    return (
      <Wrap>
        <canvas
          ref={el => {
            this.graph = el;
          }}
          id="myCanvas"
          width={width}
          height={height}
        />
      </Wrap>
    );
  }
}

// Props Validation
Graph.propTypes = {};
