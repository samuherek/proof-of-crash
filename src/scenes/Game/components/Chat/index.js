// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ellipsis } from 'polished';

// COMPONENTS

// ACTIONS/CONFIG
import comments from '../../../../data/comments';

// STYLES
const Wrap = styled.div`
  padding: 0 20px;
  height: calc(100vh - ${props => props.theme.layout.topBar});
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Tab = styled.span`
  text-align: center;
  cursor: pointer;
  line-height: 40px;
  flex: 1;
  height: 40px;
  opacity: ${props => (props.active ? '1' : '0.5')};
  display: inline-block;
  position: relative;
  font-family: 'Lato';
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${props => (props.active ? props.theme.colors.highlight : 'transparent')};
  }
`;

const MessageWrap = styled.div`
  margin-bottom: 13px;
`;

const Username = styled.span`
  margin-right: 10px;
  opacity: 0.4;
  display: block;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 2px;
  color: ${props => (props.colored ? 'white' : 'red')};
`;

const ChatOuter = styled.div`
  position: relative;
  height: calc(100% - 45px - ${props => props.theme.layout.topBar});

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    height: 50px;
    z-index: 10;
  }
`;

const ChatWrap = styled.div`
  overflow-y: auto;
  height: 100%;
  position: relative;
  color: #e0e0e0;
`;

const ChatInput = styled.input`
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: ${props => props.theme.colors.white};
  background: transparent;
  border: none;
  height: 46px;
  border-bottom: 2px solid transparent;
  margin-bottom: 4px;
  transition: border-bottom 0.3s ${props => props.theme.transition.curve};

  &:focus {
    border-bottom-color: ${props => props.theme.colors.highlight};
    outline: none;
  }
`;

const Message = styled.span`
  color: #a0a0a0;
`;

// MODULE
export default class Chat extends Component {
  componentDidMount() {
    this.chat.scrollTop = this.chat.scrollHeight;
  }

  render() {
    return (
      <Wrap>
        <Tabs>
          <Tab>History</Tab>
          <Tab active>Chat</Tab>
        </Tabs>
        <ChatOuter>
          <ChatWrap
            innerRef={el => {
              this.chat = el;
            }}
          >
            {comments.map(comment => (
              <MessageWrap key={comment.id}>
                <Username colored={comment.id % 7 !== 0}>{comment.username}:</Username>
                <Message>{comment.body.substring(0, Math.floor(Math.random() * 75) + 5)}</Message>
              </MessageWrap>
            ))}
          </ChatWrap>
        </ChatOuter>
        <ChatInput type="text" placeholder="Type here...." />
      </Wrap>
    );
  }
}

// Props Validation
Chat.propTypes = {};
