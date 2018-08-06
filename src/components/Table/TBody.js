// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
import { TRow, TCell, TCellInner } from './styles';

const TBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 99999 1 auto;
  margin: 0;
  overflow-y: auto;
  height: 100%;
  margin-top: 51px;
  padding-left: 15px;
  padding-right: 9px;
`;

const TRowBody = TRow.extend``;

// MODULE
export default function TableBody({ rowSchema, data, widthGrid }) {
  return (
    <TBody>
      {data.map(row => (
        <TRowBody key={row.id}>
          {rowSchema.map((cell, index) => (
            <TCell key={cell.ref} grow={widthGrid.length < 2 ? 1 : widthGrid[index]}>
              <TCellInner>
                {cell.ref === 'username' && row[cell.ref]}
                {cell.ref === 'at' && ' - '}
                {cell.ref === 'bet' && [
                  `${row[cell.ref]}`,
                  <span key={cell.ref}>{row.symbol}</span>
                ]}
                {cell.ref === 'bonus' && `${row[cell.ref]}%`}
                {cell.ref === 'profit' && ' - '}
              </TCellInner>
            </TCell>
          ))}
        </TRowBody>
      ))}
      {/* {data.map(row => (
        <TRowBody key={row.id}>
          {rowSchema.map((cell, index) => (
            <TCell key={cell.ref} grow={widthGrid.length < 2 ? 1 : widthGrid[index]}>
              <TCellInner>{row[cell.ref]}</TCellInner>
            </TCell>
          ))}
        </TRowBody>
      ))} */}
    </TBody>
  );
}

// Props Validation
TableBody.propTypes = {};
