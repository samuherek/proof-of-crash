// NPM
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { darken, desaturate } from 'polished';

// COMPONENTS

// ACTIONS/CONFIG
import crypto from '../../../../../../../data/crypto';

// STYLES
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

  img {
    width: 25px;
    display: block;
  }
`;

const AutoWrap = DetailWrap.extend`
  input {
    width: 80px;
    width: 100%;
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
  border: 1px solid ${props => darken(0.05, desaturate(0.2, props.theme.colors.highlight))};
  border-radius: 4px;
  box-shadow: none;
  color: white;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.highlight};
  }
`;

// MODULE
const BetInputs = ({
  onInputChange,
  setFocusElement,
  balance,
  betValue,
  activeToken,
  autoCashAtValue
}) => {
  const cryptoIcon = crypto.find(c => c.token === activeToken).icon;

  return [
    <CurrencyWrap>
      <label>Bet: </label>
      <Input
        type="number"
        placeholder="1"
        min="1"
        step="0.1"
        max={balance}
        value={betValue}
        onChange={ev => {
          onInputChange(ev.target.value, 'betValue');
        }}
        innerRef={el => {
          setFocusElement(el);
        }}
      />
      <span>
        <img src={cryptoIcon} />
      </span>
    </CurrencyWrap>,
    <AutoWrap>
      <label>Auto cashout at: </label>
      <Input
        type="number"
        min="1.01"
        step="0.01"
        placeholder=""
        value={autoCashAtValue}
        onChange={ev => {
          onInputChange(ev.target.value, 'autoCashAt');
        }}
      />
      <span>x</span>
    </AutoWrap>
  ];
};

// Props Validation
BetInputs.propTypes = {};

const mapStateToProps = state => {
  return {
    balance: state.accounts.find(a => a.token === state.ui.activeToken).balance,
    activeToken: state.ui.activeToken
  };
};

export default connect(mapStateToProps)(BetInputs);
