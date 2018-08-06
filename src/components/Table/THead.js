// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
import { TRow, TCell, TCellInner } from './styles';

const THead = styled.div`
  display: flex;
  flex: 1 0 auto;
  opacity: 1;
  margin: 0;
  position: fixed;
  left: 0;
  right: calc(25% + 15px);
  background: #191919;
  z-index: 10;
`;

const TRowHead = TRow.extend`
  height: 51px;
  padding-left: 15px;
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100%;
`;

const TCellHead = TCell.extend`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 11px;
`;

// MODULE
export default function TableHead({ rowSchema, widthGrid }) {
  return (
    <THead>
      <TRowHead>
        {rowSchema.map((item, index) => (
          <TCellHead key={item.label} grow={widthGrid.length < 2 ? 1 : widthGrid[index]}>
            <TCellInner>{item.label}</TCellInner>
          </TCellHead>
        ))}
      </TRowHead>
    </THead>
  );
}

// Props Validation
TableHead.propTypes = {};
