import styled from 'styled-components';
import { white, red, secondary } from '../../styles/colors'
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-width: 120px;
  
  border: 0;
  background: ${secondary};
  color: ${white};
  padding: 15px; 
  transition: background-color 0.2s;

  &:first-child {
    border-radius: 5px 0 0 5px;
    margin-left: 10px;

    &:hover {
      background: ${shade(0.2, secondary)};
    }
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    background-color: ${red};

    &:hover {
      background: ${shade(0.2, red)};
    }
  }
`;