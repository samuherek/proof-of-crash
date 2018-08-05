// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: ${props => props.theme.layout.topBar};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: ${props => darken(0.1, props.theme.colors.white)};
    text-shadow: 0 0 5px rgba(255, 255, 255, 0);
    transition: color 0.2s ${props => props.theme.transition.curve},
      text-shadow 0.2s ${props => props.theme.transition.curve};

    &:hover {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      color: ${props => props.theme.colors.white};
    }
  }
`;

const Left = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: inline-block;
    width: 50px;
    fill: ${props => props.theme.colors.highlight};
    margin-right: 15px;
  }
`;

const Right = styled.div``;

// MODULE
export default function TopBar({}) {
  return (
    <Wrap>
      <Left>
        <Logo>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
            <path d="M40.5 4c-4.1 0-8 1.6-10.9 4.4H13.3v1.5h14.9c-1 1.2-1.8 2.6-2.4 4h-8.2v1.5h7.6c-.4 1.3-.7 2.6-.7 4h-9.1v1.5h9.1c.1 1.4.3 2.7.7 4h-6.6v1.5h7.1c.8 1.9 2 3.6 3.4 5.1H7.8V33h23.1c7 5.4 17.1 4 22.4-3 5.4-7 4-17.1-3-22.4C47.5 5.1 44 4 40.5 4zm0 30.5C32.5 34.5 26 28 26 20S32.5 5.5 40.5 5.5 55.1 12 55.1 20s-6.5 14.5-14.6 14.5z" />
            <path d="M52.6 17.2c.1.3.4.6.7.6h.2c.4-.1.6-.5.5-.9 0-.1-.1-.2-.1-.3-.1-.3-.4-.6-.7-.5H53c-.4.1-.6.5-.5.9 0 0 .1.1.1.2zM32.3 10.8l.1-.1.1-.1c.3-.3.3-.7.1-1-.3-.3-.7-.3-1-.1l-.2.2c-.3.3-.3.7-.1 1 .1.2.3.2.5.2.2.1.4 0 .5-.1zM33 29.8l-.2-.1c-.1-.1-.3-.2-.5-.2s-.4.1-.6.3c-.3.3-.2.8.1 1l.3.2c.1.1.3.2.4.2.2 0 .5-.1.6-.3.4-.3.3-.8-.1-1.1zM36 8.5l.3-.1c.4-.1.6-.6.4-.9-.1-.3-.4-.5-.7-.5h-.3l-.3.1c-.4.1-.6.6-.4.9.1.3.4.5.7.5.1.1.2 0 .3 0zM37 31.8h-.4c-.4-.1-.8.2-.8.6-.1.4.2.8.6.8l.3.1h.2c.4.1.8-.2.8-.6 0-.4-.3-.7-.7-.9zM27.5 19h.1c.4 0 .7-.3.7-.6v-.3c.1-.4-.2-.8-.6-.8h-.1c-.4 0-.7.3-.7.6 0 .1 0 .2-.1.3 0 .3.2.7.7.8zM30.1 26.7l-.1-.1v-.1c-.1-.2-.4-.4-.6-.3-.1 0-.3 0-.4.1-.3.2-.4.7-.2 1l.2.3c.2.3.7.4 1 .2.3-.3.4-.7.1-1.1zM28.4 22.4c-.1-.3-.4-.6-.7-.6h-.1c-.4.1-.7.5-.6.9v.3c.1.3.4.6.7.6h.2c.4-.1.6-.5.6-.9-.1-.1-.1-.2-.1-.3zM29.6 14.2l.1-.3c.2-.3.1-.8-.3-1-.1-.1-.2-.1-.4-.1-.3 0-.5.1-.6.4l-.2.3c-.2.4-.1.8.3 1 .1.1.2.1.3.1.4 0 .7-.2.8-.4zM51.9 13.4c.3-.2.4-.7.2-1-.1-.1-.1-.2-.2-.3-.1-.2-.4-.3-.6-.3-.4 0-.7.3-.7.7 0 .1 0 .3.1.4l.1.1.1.1c.2.4.6.5 1 .3zM52.6 25.1c-.1 0-.2-.1-.3-.1-.3 0-.5.2-.7.4v.1l-.1.1c-.2.3-.1.8.2 1 .1.1.2.1.3.1.3 0 .5-.2.6-.4.1-.1.1-.2.1-.3.4-.3.3-.7-.1-.9zM40.3 7.6h.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-.3c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h.1zM53.6 20.6c-.4 0-.8.3-.8.7v.2c0 .4.2.8.6.8h.1c.4 0 .7-.3.7-.6v-.3c.1-.5-.2-.8-.6-.8zM49.6 28.7c-.2 0-.4.1-.5.2H49l-.1.1c-.3.3-.3.7 0 1 .1.2.3.2.5.2s.4-.1.5-.2l.2-.2c.3-.3.3-.7 0-1-.1-.1-.3-.1-.5-.1zM41.3 32.4H41c-.4 0-.7.3-.7.7s.3.7.7.7h.3c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM44.4 6.7l-.3-.1h-.2c-.4-.1-.8.2-.8.6-.1.5.2.8.6.9h.4c.4.1.8-.2.8-.6.1-.4-.1-.8-.5-.8zM45.8 31.3c-.1 0-.2 0-.3.1l-.1.1h-.1c-.4.2-.5.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l.3-.1c.4-.2.5-.6.4-1-.2-.3-.5-.5-.8-.4zM48.7 8.9l-.3-.2c-.3-.2-.8-.2-1 .2-.2.3-.2.8.2 1l.2.2c.3.2.8.2 1-.2.3-.3.3-.8-.1-1zM8.9 8.4h2.2v1.5H8.9zM14.4 24.7h2.2v1.5h-2.2zM10 24.7h2.2v1.5H10zM3.4 31.3h2.2v1.5H3.4zM13.3 13.8h2.2v1.5h-2.2zM4.5 8.4h2.2v1.5H4.5z" />
          </svg>
          <span>Proof of Crash</span>
        </Logo>
      </Left>
      <Right>
        <Link to="/account">Account</Link>
      </Right>
    </Wrap>
  );
}

// Props Validation
TopBar.propTypes = {};
