// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Button from '../../../../../../../components/Button';

// ACTIONS/CONFIG

// STYLE
const ButtonB = Button.extend`
  padding: 15px 20px;
  height: auto;
  width: 100%;
  max-width: 250px;
`;

// MODULE
export default function BetButtons({ onAddBet, onCashOut, status, playCounter }) {
  const onClick = () => {
    if (status.entryActiveNoBet) {
      onAddBet();
    }
    if (status.playingWithBet) {
      onCashOut();
    }
  };
  return (
    <ButtonB onClick={onClick}>
      <span>
        {status.playingWithBet && `Cash out @ ${playCounter.toFixed(2)} x`}
        {status.playingNoBet && 'Wait for next entry'}
        {status.crashedWithBet && 'Noooooo....'}
        {status.entryActiveWithBet && 'Wait...'}
        {status.entryActiveNoBet && 'Place bet'}
      </span>
    </ButtonB>
  );
}

// Props Validation
BetButtons.propTypes = {
  status: PropTypes.shape({
    playingWithBet: PropTypes.bool,
    playingNoBet: PropTypes.bool,
    crashedWithBet: PropTypes.bool,
    entryActiveWithBet: PropTypes.bool,
    entryActiveNoBet: PropTypes.bool,
    betActive: PropTypes.bool
  })
};
