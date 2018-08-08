// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS
import TopBar from '../../components/TopBar';
import Chat from './components/Chat';
import Players from './components/Players';
import Play from './components/Play';

// ACTIONS/CONFIG
import Utils from '../../utils/Utils';
import { disablePlayerEntry, enablePlayerEntry, activateCrash } from '../../actions/uiActions';
import { crashedWithBet } from '../../actions/betActions';

// STYLES
const Wrap = styled.div``;

const GameWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  padding-top: ${props => props.theme.layout.topBar};
`;

const ChatWrap = styled.div`
  position: fixed;
  top: ${props => props.theme.layout.topBar};
  bottom: 0;
  right: 0;
  width: 25%;
`;

const BettingWrap = styled.div`
  margin-right: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PlayeresWrap = styled.div`
  overflow-y: auto;
  height: 50vh;
`;

// MODULE
class GameScene extends Component {
  constructor() {
    super();
    this.state = {
      playCounterValue: 1,
      crashAt: Utils.getCrashValue(1.01, 12),
      interval: 30
    };

    this.handleCountDownFinish = this.handleCountDownFinish.bind(this);
    this.handlePlayFinish = this.handlePlayFinish.bind(this);
    this.startPlay = this.startPlay.bind(this);
    this.udpatePlayerCounter = this.udpatePlayerCounter.bind(this);
    this.setNewCrashValue = this.setNewCrashValue.bind(this);
  }

  setNewCrashValue() {
    this.setState({ crashAt: Utils.getCrashValue(1.01, 12) });
  }

  udpatePlayerCounter() {
    const { playCounterValue } = this.state;
    this.setState({ playCounterValue: +(playCounterValue + 0.01).toFixed(2) });
  }

  handleCountDownFinish() {
    this.startPlay();
  }

  startPlay() {
    this.props.disablePlayerEntry();
    this.setNewCrashValue();

    this.playInterval = setInterval(() => {
      if (this.state.crashAt > this.state.playCounterValue) {
        this.setState({ playCounterValue: +(this.state.playCounterValue + 0.01).toFixed(2) });
      } else {
        clearInterval(this.playInterval);
        this.handlePlayFinish();
      }
    }, this.state.interval);
  }

  handlePlayFinish() {
    this.props.crashedWithBet();
    this.props.activateCrash();
    this.timeout = setTimeout(() => {
      this.setState({ playCounterValue: 1 });
      this.props.enablePlayerEntry();
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    this.timeout = null;
    clearInterval(this.playInterval);
    this.playInterval = null;
  }

  render() {
    const { playCounterValue, crashAt } = this.state;

    return (
      <Wrap>
        <TopBar />
        <GameWrap>
          <BettingWrap>
            <Play
              playCounterValue={playCounterValue}
              crashAt={crashAt}
              onPlayFinish={this.handlePlayFinish}
              onCountDownFinish={this.handleCountDownFinish}
              updateCounter={this.udpatePlayerCounter}
            />
            <PlayeresWrap>
              <Players playCounterValue={playCounterValue} />
            </PlayeresWrap>
          </BettingWrap>
          <ChatWrap>
            <Chat />
          </ChatWrap>
        </GameWrap>
      </Wrap>
    );
  }
}

// Props Validation
GameScene.propTypes = {};

const mapStateToProps = state => {
  return {
    playerEntryActive: state.ui.playerEntryActive
  };
};

export default connect(
  mapStateToProps,
  { enablePlayerEntry, disablePlayerEntry, activateCrash, crashedWithBet }
)(GameScene);
