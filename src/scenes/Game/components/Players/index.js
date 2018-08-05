// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Table from '../../../../components/Table';
import THead from '../../../../components/Table/THead';
import TBody from '../../../../components/Table/TBody';

// ACTIONS/CONFIG
import usernames from '../../../../data/usernames';

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
