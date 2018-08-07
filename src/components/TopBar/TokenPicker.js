// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { connect } from 'react-redux';

// COMPONENTS

// ACTIONS/CONFIG
import { setActiveToken } from '../../actions/uiActions';
import crypto from '../../data/crypto';

// MODULE
class TokenPicker extends Component {
  constructor() {
    super();
  }

  render() {
    const { activeToken, setActiveToken } = this.props;

    return (
      <Downshift
        itemToString={item => String(item.token)}
        selectedItem={activeToken}
        onChange={item => {
          console.log(item, item.token);
          setActiveToken(item.token);
        }}
      >
        {({
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
          isOpen,
          selectedItem,
          highlightedIndex
        }) => (
          <div>
            <button {...getToggleButtonProps({})}>{(selectedItem && selectedItem) || ''}</button>
            <ul hidden={!isOpen} {...getMenuProps()}>
              {crypto.map((item, index) => (
                <li
                  {...getItemProps({
                    item,
                    key: item.token,
                    style: {
                      textDecoration: highlightedIndex === index ? 'underline' : undefined
                    }
                  })}
                >
                  {item.token}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Downshift>
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
