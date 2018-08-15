// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG
import Utils from '../../utils/Utils';

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

const TRowBody = TRow.extend`
  margin-bottom: 2px;
  background: transparent;
  transition: background 0.5s ease-in;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    z-index: -1;
  }

  &:before {
    background: rgba(122, 23, 23, 0.75);
    // background: linear-gradient(
    //   to right,
    //   rgba(122, 23, 23, 0.75) 0%,
    //   rgba(30, 87, 153, 0) 75%,
    //   rgba(125, 185, 232, 0) 100%
    // );
  }

  &:after {
    background: rgba(${props => Utils.hexToRgb(props.theme.colors.highlight)}, 0.4);
    // background: linear-gradient(
    //   to right,
    //   rgba(${props => Utils.hexToRgb(props.theme.colors.highlight)}, 0.4) 0%,
    //   rgba(30, 87, 153, 0) 75%,
    //   rgba(125, 185, 232, 0) 100%
    // );
  }

  ${props =>
    props.lost &&
    css`
      &:before {
        opacity: 1;
      }
    `} ${props =>
  props.won &&
  css`
    &:after {
      opacity: 1;
    }
  `};
`;

// const At = (counter, cashAt) => {
//   if (counter > cashAt) {
//     return String(cashAt);
//   } else {
//     return ' - ';
//   }
// }

// const Profit = () => {

// }

// MODULE
export default function TableBody({ rowSchema, data, widthGrid, playCounterValue, crashActive }) {
  return (
    <TBody>
      {data.map(row => (
        <TRowBody
          key={row.id}
          lost={crashActive && row.autoCashAt > playCounterValue}
          won={playCounterValue > row.autoCashAt}
        >
          {rowSchema.map((cell, index) => (
            <TCell key={cell.ref} grow={widthGrid.length < 2 ? 1 : widthGrid[index]}>
              <TCellInner>
                {cell.ref === 'username' && row[cell.ref]}
                {cell.ref === 'at' && ' - '}
                {cell.ref === 'bet' && [
                  <span key={cell.ref}>
                    <img src={row.symbol} />
                  </span>,
                  `${Utils.numberWithCommas(row[cell.ref])}`
                ]}
                {cell.ref === 'bonus' && `${row[cell.ref]}%`}
                {cell.ref === 'profit' && ' - '}
              </TCellInner>
            </TCell>
          ))}
        </TRowBody>
      ))}
    </TBody>
  );
}

// Props Validation
TableBody.propTypes = {};
