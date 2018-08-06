// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// COMPONENTS
import Button from '../../../../../components/Button';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 25px 15px;
  padding: 0 15px;
  background: #191919;
  min-height: 80px;
  max-height: 80px;

  ${props =>
    !props.isCountDonw &&
    css`
      button {
        background: #102720;
        color: #2d3e39;
        cursor: default;

        &:hover {
          background: #102720;
          color: #2d3e39;
        }
      }

      input {
        border-color: #102720;
        color: #8c8c8c;

        &:focus {
          color: white;
        }
      }
    `};
`;

const Arrow = styled.div`
  svg {
    margin-right: 15px;
    display: block;
    width: 40px;
    fill: ${props => props.theme.colors.highlight};
  }
`;

const Input = styled.input`
  background: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.background};
  font-size: inherit;
  font-weight: 400;
  padding: 15px 20px;
  display: inline-block;
  line-height: 1.33;
  border: 1px solid #288062;
  border-radius: 4px;
  box-shadow: none;
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
  max-width: 250px;
`;

const DetailWrap = styled.div`
  position: relative;
  margin-right: 15px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  width: 100%;

  input {
    text-align: right;
  }

  label {
    white-space: nowrap;
    display: block;
    font-family: 'Lato';
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 11px;
    color: #8c8c8c;
    margin-right: 15px;
  }

  span {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #8c8c8c;
  }
`;

const CurrencyWrap = DetailWrap.extend`
  position: relative;
  margin-right: 15px;

  input {
    width: 130px;
    padding-right: 60px;
    width: 100%;
  }
`;

const AutoWrap = DetailWrap.extend`
  input {
    width: 80px;
    width: 100%;
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
    const { isCountDonw, playCounterValue } = this.props;

    return (
      <Wrap isCountDonw={isCountDonw}>
        <Arrow>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path
              class="st0"
              d="M23.3 33.4H13.2l9.8-9.8H3.4v-7.2H23l-9.8-9.8h10.1L36.6 20 23.3 33.4z"
            />
          </svg>
        </Arrow>
        <CurrencyWrap>
          <label>Bet: </label>
          <Input
            type="number"
            placeholder="1"
            innerRef={el => {
              this.input = el;
            }}
          />
          <span>ETH</span>
        </CurrencyWrap>
        <AutoWrap>
          <label>Auto cashout at: </label>
          <Input type="number" placeholder="2" />
          <span>x</span>
        </AutoWrap>
        <Button2
          onClick={() => {
            console.log(playCounterValue);
          }}
        >
          Plce bet
        </Button2>
      </Wrap>
    );
  }
}

// Props Validation
Bet.propTypes = {};
