// NPM
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import TopBar from '../../components/TopBar';

// ACTIONS/CONFIG

// MODULE
export default function GameScene({}) {
  return (
    <div>
      <TopBar />
      <h1>Let's play babe!!!</h1>
      <span>Huray</span>
    </div>
  );
}

// Props Validation
GameScene.propTypes = {};
