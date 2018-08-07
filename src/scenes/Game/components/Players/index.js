// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS
import Table from '../../../../components/Table';
import THead from '../../../../components/Table/THead';
import TBody from '../../../../components/Table/TBody';

// ACTIONS/CONFIG
import usernames from '../../../../data/usernames';
import crypto from '../../../../data/crypto';

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
class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      tokenIcon: crypto.find(c => c.token === props.activeToken).icon
    };

    this.loadPlayersWithInterval = this.loadPlayersWithInterval.bind(this);
  }

  componentDidMount() {
    this.loadPlayersWithInterval();
  }

  loadPlayersWithInterval() {
    this.loader = setInterval(() => {
      const player = {
        username: usernames[Math.floor(Math.random() * 83)],
        bet: Math.floor(getValue(0, 100000)),
        symbol: this.state.tokenIcon,
        bonus: Math.floor(getValue(0, 9) * 100) / 100,
        profit: '',
        at: ''
      };
      this.setState({ players: [...this.state.players, player] });
    }, 75);
  }

  componentWillReceiveProps(nextProps) {
    const { activeToken, playerEntryActive } = this.props;

    if (activeToken !== nextProps.activeToken) {
      const token = crypto.find(c => c.token === nextProps.activeToken);
      const nextPlayers = this.state.players.map(player => {
        player.symbol = token.icon;
        return player;
      });
      this.setState({ players: nextPlayers, tokenIcon: token.icon });
    }

    if (nextProps.playerEntryActive) {
      this.loadPlayersWithInterval();
      this.setState({ players: [] });
    }
  }

  componentWillUpdate() {
    const { players } = this.state;
    const { playerEntryActive } = this.props;
    if (players.length > 15 && playerEntryActive) {
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
Players.propTypes = {
  bet: PropTypes.shape({
    betValue: PropTypes.string,
    betAutoCash: PropTypes.string,
    betActive: PropTypes.bool
  }),
  activeToken: PropTypes.string,
  playerEntryActive: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    bet: state.bet,
    activeToken: state.ui.activeToken,
    playerEntryActive: state.ui.playerEntryActive
  };
};

export default connect(mapStateToProps)(Players);
