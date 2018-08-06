// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Table from '../../../../components/Table';
import THead from '../../../../components/Table/THead';
import TBody from '../../../../components/Table/TBody';
import amb from '../../../../data/icons/amb.svg';
import bat from '../../../../data/icons/bat.svg';
import btc from '../../../../data/icons/btc.svg';
import dash from '../../../../data/icons/dash.svg';
import eos from '../../../../data/icons/eos.svg';
import eth from '../../../../data/icons/eth.svg';
import xlm from '../../../../data/icons/xlm.svg';
import xrp from '../../../../data/icons/xrp.svg';

// ACTIONS/CONFIG
import usernames from '../../../../data/usernames';
// import crypto from '../../../../data/crypto';

// STYLES
const Wrap = styled.div`
  position: relative;

  & > div {
    width: 100%;
    overflow: hidden;
    position: absolute;
    display: block;
  }
`;

function getValue(min, max) {
  return min - 1 + Math.pow(max - min + 1, Math.random());
}

const symbols = [amb, bat, btc, dash, eos, eth, xlm, xrp];

// MODULE
export default class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.loader = setInterval(() => {
      const player = {
        username: usernames[Math.floor(Math.random() * 83)],
        bet: Math.floor(getValue(0, 100000)),
        symbol: symbols[Math.floor(Math.random() * 8)],
        bonus: Math.floor(getValue(0, 9) * 100) / 100,
        profit: '',
        at: ''
      };
      this.setState({ players: [...this.state.players, player] });
    }, 75);
  }

  componentWillUpdate() {
    if (this.state.players.length > 15) {
      clearInterval(this.loader);
    }
  }

  render() {
    const { players } = this.state;
    return (
      <Wrap>
        <Table widthGrid={[1, 1, 1, 1]}>
          <THead
            rowSchema={[
              { label: 'User', ref: 'username' },
              { label: '@', ref: 'at' },
              { label: 'Bet', ref: 'bet' },
              { label: 'Bonus', ref: 'bonus' },
              { label: 'Profit', ref: 'profit' }
            ]}
          />
          <TBody
            data={players}
            rowSchema={[
              { ref: 'username' },
              { ref: 'at' },
              { ref: 'bet' },
              { ref: 'bonus' },
              { ref: 'profit' }
            ]}
          />
        </Table>
      </Wrap>
    );
  }
}

// Props Validation
Players.propTypes = {};
