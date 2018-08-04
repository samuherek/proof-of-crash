// NPM
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import TopBar from '../../components/TopBar';

// ACTIONS/CONFIG

// MODULE
export default function AccountScene({}) {
  return (
    <div>
      <TopBar />
      <h1>Your account details are here</h1>
      <span>Huray</span>
    </div>
  );
}

// Props Validation
AccountScene.propTypes = {};
