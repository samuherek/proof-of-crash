// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import TableHead from './THead';
import TableBody from './TBody';

// ACTIONS/CONFIG

// STYLES
const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: auto 1;
`;

// MODULE
export default function Table({ children, widthGrid }) {
  let tHead;
  let tBody;

  React.Children.map(children, child => {
    if (child.type === TableHead) {
      tHead = React.cloneElement(child, {
        widthGrid
      });
    } else if (child.type === TableBody) {
      tBody = React.cloneElement(child, {
        widthGrid
      });
    }
    return null;
  });
  return (
    <TableWrap>
      {tHead}
      {tBody}
    </TableWrap>
  );
}

// Props Validation
Table.propTypes = {};
