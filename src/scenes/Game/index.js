// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import TopBar from '../../components/TopBar';
import Graph from './components/Graph';
import Chat from './components/Chat';
import Players from './components/Players';
import Bet from './components/Bet';

// ACTIONS/CONFIG

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

  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #0f271f;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #51cda2;
  }
`;

// const GraphBetWrap = styled.div`
//   display: flex;
//   min-height: 300px;
//   height: 50vh;

//   & > div {
//     flex: 1;
//   }
// `;

// MODULE
export default function GameScene({}) {
  return (
    <Wrap>
      <TopBar />
      <GameWrap>
        <BettingWrap>
          <Graph />
          <Bet />
          <PlayeresWrap>
            <Players />
          </PlayeresWrap>
        </BettingWrap>
        <ChatWrap>
          <Chat />
        </ChatWrap>
      </GameWrap>
    </Wrap>
  );
}

// Props Validation
GameScene.propTypes = {};
