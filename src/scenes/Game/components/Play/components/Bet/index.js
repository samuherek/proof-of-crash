// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { desaturate, darken } from 'polished';

// COMPONENTS
import BetInputs from './components/BetInputs';
import BetButtons from './components/BetButtons';

// ACTIONS/CONFIG
import { addNewBet, cashOutAt } from '../../../../../../actions/betActions';

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
    (props.status.playingNoBet || props.status.entryActiveWithBet) &&
    css`
      button {
        background: ${props => darken(0.05, desaturate(0.2, props.theme.colors.highlight))};
        color: white;
        cursor: default;

        span {
          opacity: 0.5;
        }

        &:hover {
          background: ${props => darken(0.05, desaturate(0.2, props.theme.colors.highlight))};
          color: white;

          span {
            opacity: 0.5;
          }
        }
      }

      input {
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

// MODULE
class Bet extends Component {
  constructor() {
    super();
    this.state = {
      betValue: '1',
      autoCashAt: '2'
    };

    this.handleValueUpdate = this.handleValueUpdate.bind(this);
    this.setFocusElement = this.setFocusElement.bind(this);
    this.handleAddingBet = this.handleAddingBet.bind(this);
    this.handleCashOut = this.handleCashOut.bind(this);
  }

  componentDidMount() {
    this.mainInput.focus();
  }

  componentDidUpdate() {
    const { status, betAutoCashAt, playCounterValue } = this.props;
    if (status.playingWithBet && betAutoCashAt) {
      if (Number(betAutoCashAt) <= playCounterValue) {
        this.props.cashOutAt(playCounterValue);
      }
    }
  }

  handleValueUpdate(value, key) {
    if (key === 'betValue' && Number(this.props.balance) < Number(value)) {
      this.setState({ betValue: this.props.balance });
    } else {
      this.setState({ [key]: value });
    }
  }

  setFocusElement(el) {
    this.mainInput = el;
  }

  handleAddingBet() {
    this.props.addNewBet(this.state.betValue, this.state.autoCashAt);
  }

  handleCashOut() {
    if (this.props.status.playingWithBet) {
      this.props.cashOutAt(this.props.playCounterValue);
    }
  }

  render() {
    const { status, playCounterValue } = this.props;
    const { betValue, autoCashAt } = this.state;

    return (
      <Wrap status={status}>
        <Arrow>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path d="M23.3 33.4H13.2l9.8-9.8H3.4v-7.2H23l-9.8-9.8h10.1L36.6 20 23.3 33.4z" />
          </svg>
        </Arrow>
        <BetInputs
          onInputChange={this.handleValueUpdate}
          setFocusElement={this.setFocusElement}
          betValue={betValue}
          autoCashAtValue={autoCashAt}
        />
        <BetButtons
          playCounter={playCounterValue}
          onAddBet={this.handleAddingBet}
          onCashOut={this.handleCashOut}
          status={status}
        />
      </Wrap>
    );
  }
}

// Props Validation
Bet.propTypes = {
  betAutoCashAt: PropTypes.string,
  status: PropTypes.shape({})
};

const mapStateToProps = state => {
  const { playerEntryActive, crashActive } = state.ui;
  const betActive = state.bet.value !== '';

  return {
    betAutoCashAt: state.bet.autoCashAt,
    status: {
      playingWithBet: !playerEntryActive && !crashActive && betActive,
      playingNoBet: !playerEntryActive && !betActive,
      crashedWithBet: !playerEntryActive && crashActive && betActive,
      entryActiveWithBet: playerEntryActive && betActive,
      entryActiveNoBet: playerEntryActive && !betActive,
      betActive,
      crashActive,
      playerEntryActive
    }
  };
};

export default connect(
  mapStateToProps,
  {
    addNewBet,
    cashOutAt
  }
)(Bet);
