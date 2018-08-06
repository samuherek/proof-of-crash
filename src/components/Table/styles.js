import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const TRow = styled.div`
  display: inline-flex;
  flex: 1 0 auto;
`;

export const TCell = styled.div`
  width: ${props => props.grow * 100}%;
  padding-top: 15px;
  paddin-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  padding: 15px 10px;
  color: ${props => props.theme.colors.white};
  min-width: ${props => props.size || '100px'};
  max-width: ${props => props.size || 'inherit'};
  display: flex;
  align-items: center;
  font-family: 'Lato';
`;

export const TCellInner = styled.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-family: 'Lato';

  span {
    margin-left: 10px;
    opacity: 0.5;
  }
`;
