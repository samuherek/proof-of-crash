// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG
import { setActiveToken } from '../../actions/uiActions';
import crypto from '../../data/crypto';

// STYLES
const Dropdown = styled.div`
  display: inline-block;

  & > div {
    display: inline-block;
    position: relative;
  }
`;

const Toggle = styled.button`
  background: transparent;
  border: none;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color: #8c8c8c;
  padding-right: 20px;

  &:hover,
  &:focus {
    color: white;

    svg {
      fill: white;
    }
  }

  &:focus {
    outline: none;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    width: 15px;
    top: 0;
    height: 20px;
    transform: rotate(0deg);

    svg {
      width: 10px;
      height: 10px;
      fill: #8c8c8c;
    }
  }

  ${props =>
    props.isOpen &&
    css`
      span {
        transform: rotate(180deg);
      }
    `};
`;

const Drop = styled.div`
  position: absolute;
  background: #302c2c;
  left: 50%;
  transform: translate(-50%, 15px);
  width: 140px;
  top: 100%;
  border-radius: 5px;

  ul {
    list-style: none;
    padding: 7px 0;
    overflow-y: auto;
    max-height: 170px;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #302c2c;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Item = styled.li`
  cursor: pointer;
  color: ${props => (props.isActive ? 'white' : '#8c8c8c')};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  transition: color 0.2s ${props => props.theme.transition.curve};

  &:hover {
    color: white;

    img {
      opacity: 1;
    }
  }

  img {
    opacity: ${props => (props.isActive ? '1' : '0.75')};
    width: 19px;
    margin-right: 11px;
    transition: opacity 0.2s ${props => props.theme.transition.curve};
  }
`;

// MODULE
class TokenPicker extends Component {
  constructor() {
    super();
  }

  render() {
    const { activeToken, setActiveToken } = this.props;

    return (
      <Dropdown>
        <Downshift
          itemToString={item => String(item.token)}
          selectedItem={activeToken}
          onChange={item => {
            setActiveToken(item.token);
          }}
        >
          {({ getToggleButtonProps, getMenuProps, getItemProps, isOpen, selectedItem }) => (
            <div>
              <Toggle {...getToggleButtonProps({})} isOpen={isOpen}>
                {selectedItem}{' '}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M32 46a3.589 3.589 0 0 1-2.475-.971L8.026 24.663a3.194 3.194 0 0 1 0-4.691c1.367-1.295 3.584-1.295 4.952 0L32 37.992l19.023-18.021c1.367-1.295 3.584-1.295 4.951 0a3.194 3.194 0 0 1 0 4.691L34.475 45.029A3.592 3.592 0 0 1 32 46z" />
                  </svg>
                </span>
              </Toggle>
              <Drop hidden={!isOpen} {...getMenuProps()}>
                <ul>
                  {crypto.map((item, index) => (
                    <Item
                      {...getItemProps({
                        item,
                        key: item.token
                      })}
                      isActive={item.token === activeToken}
                    >
                      <img src={item.icon} />
                      {item.token}
                    </Item>
                  ))}
                </ul>
              </Drop>
            </div>
          )}
        </Downshift>
      </Dropdown>
    );
  }
}

// Props Validation
TokenPicker.propTypes = {
  activeToken: PropTypes.string,
  setActiveToken: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    activeToken: state.ui.activeToken
  };
};

export default connect(
  mapStateToProps,
  { setActiveToken }
)(TokenPicker);
