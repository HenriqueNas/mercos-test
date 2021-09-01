import styled, { css } from 'styled-components';
import { black, primary, secondary, white, grey, red } from '../../styles/colors';
import { shade } from 'polished';

interface CardProps {
  total?: boolean;
}

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${black};
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? secondary : primary)};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${white};
  font-weight: 700;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: ${grey};
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${white};
      font-size: 16px;
      font-weight: normal;
      color: ${black};

      &.title {
        color: ${grey};
      }

      &.income {
        color: ${secondary};
      }

      &.outcome {
        color: ${red};
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;


export const Form = styled.form<FormProps>`
  margin-top: 40px;
  /* max-width: 700px; */
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    color: ${grey};
    border: 2px solid ${white};
    border-right: 0;
    ${props =>
      props.hasError &&
      css`
        border-color: ${primary};
      `}

    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:nth-child(3) {
      border-radius: 0 5px 5px 0;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
export const Switch = styled.div`
  .switch-button {
    background: rgba(255, 255, 255, 0.56);
    overflow: hidden;
    width: 240px;
    height: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 1px;
    color: ${white};
    position: relative;
    padding-right: 120px;
    position: relative;

    &:before {
      content: "Saída";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
      color: ${primary};
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(120px);
        transition: transform 300ms linear;
      }

      & + .switch-button-label {
        position: relative;
        padding: 15px 0;
        display: block;
        user-select: none;
        pointer-events: none;
        height: 100%;

        &:before {
          content: "";
          background: ${primary};
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(0);
          transition: transform 300ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

`;

export const FormButton = styled.button`
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