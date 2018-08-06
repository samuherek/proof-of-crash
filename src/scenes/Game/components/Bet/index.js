// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Button from '../../../../components/Button';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px 25px 15px;
  padding: 18px 14px;
  background: #334c43;
  border-radius: 6px;
`;

const Input = styled.input`
  background: ${props => props.theme.colors.background};
  font-size: inherit;
  font-weight: 400;
  padding: 15px 20px;
  display: inline-block;
  line-height: 1.33;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  margin-right: 15px;
  color: white;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const Button2 = Button.extend`
  padding: 15px 20px;
  height: auto;
  width: 100%;
`;

const Button3 = Button.extend`
  background: transparent;
  opacity: 0.5;
  padding: 15px 20px;
  height: auto;
  width: 100%;
  max-width: 150px;

  &:hover {
    background: transparent;
    opacity: 1;
  }
`;

// MODULE
export default class Bet extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <Wrap>
        <Input
          type="number"
          placeholder="Bet"
          innerRef={el => {
            this.input = el;
          }}
        />
        <Input type="text" placeholder="Auto cash out" />
        <Button2>Plce bet</Button2>
      </Wrap>
    );
  }
}

// Props Validation
Bet.propTypes = {};
