// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import TopBar from '../../components/TopBar';

// ACTIONS/CONFIG
import { AUTH_KEY, AUTH_DATA } from '../../App';

// STYLES
const Wrap = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const LogOutBtn = styled.button`
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;

  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  margin: 25px auto 0;
  cursor: pointer;
  opacity: 0.5;
  justify-content: center;
  background: transparent;
  padding: 4px 10px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 6px;
  height: 36px;
  min-width: 140px;
  transition: opacity 0.2s ${props => props.theme.transition.curve};

  &:hover {
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.white};
    display: inline-block;
    margin-right: 5px;
    width: 26px;
  }

  span {
    display: inline-block;
  }
`;

// MODULE
export default class AccountScene extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    const { onLogOut } = this.props;
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_DATA);
    onLogOut();
  }

  render() {
    return (
      <div>
        <TopBar />
        <Wrap>
          <h1>Your account details are here</h1>
          <span>Huray</span>
          <LogOutBtn onClick={this.handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <path d="M28.9 32.2c-2.6 1.9-5.7 2.9-8.9 2.9-2 0-4-.4-5.9-1.2-1.8-.8-3.4-1.9-4.8-3.2s-2.5-3-3.2-4.8C5.3 24 4.9 22 4.9 20s.4-4 1.2-5.9c.8-1.8 1.8-3.4 3.2-4.8s3-2.5 4.8-3.2C16 5.3 18 4.9 20 4.9c3.2 0 6.3 1 8.9 2.9.5.4 1.3.3 1.7-.3.4-.5.3-1.3-.3-1.7-3-2.2-6.6-3.4-10.4-3.4-2.4 0-4.7.5-6.8 1.4-2.1.9-4 2.2-5.6 3.8s-2.9 3.5-3.8 5.6c-.9 2.2-1.4 4.5-1.4 6.8s.5 4.7 1.4 6.8c.9 2.1 2.2 4 3.8 5.6 1.6 1.6 3.5 2.9 5.6 3.8 2.2.9 4.5 1.4 6.8 1.4 3.8 0 7.4-1.2 10.4-3.4.5-.4.7-1.2.3-1.7-.3-.6-1.1-.7-1.7-.3zm8.3-13.1l-4.7-4.7c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7l2.6 2.6H16.9c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2h16.5l-2.6 2.6c-.5.5-.5 1.3 0 1.7.2.2.6.4.9.4.3 0 .6-.1.9-.4l4.7-4.7c.4-.3.4-1.1-.1-1.6z" />
            </svg>
            <span>Log Out</span>
          </LogOutBtn>
        </Wrap>
      </div>
    );
  }
}

// Props Validation
AccountScene.propTypes = {};
