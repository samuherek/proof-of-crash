import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  font-family: inherit;
  color: #fff;
  background: ${props => props.theme.colors.highlight};
  outline: 0;
  border: none;
  font-size: 14px;
  padding: 4px 10px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  line-height: 22px;
  transition: background 0.1s ease-out;
  height: 36px;
  min-width: 140px;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.colors.highlight)};
  }
`;

export default Button;
