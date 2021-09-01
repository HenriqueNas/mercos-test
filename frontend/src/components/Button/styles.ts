import styled from 'styled-components';
import { white, red, secondary } from '../../styles/colors'
import { shade } from 'polished';

interface ButtonProps {
  kind?: 'icon' | 'text';
}

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${({ kind }) => (kind === 'icon' ? red : secondary)};
  color: ${white};
  border-radius: 4px;
  padding: ${({ kind }) => (kind === 'icon' ? '8px' : '15px 80px')};
  border: 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, red)};
  }
`;