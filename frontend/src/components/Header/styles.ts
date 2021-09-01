import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #FFF;
  padding: 30px 0;
  box-shadow:
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07)
  ;



  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      a {
        color: #121214;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        div.bar {
          width: 90px;
          height: 2px;
          background: #fff;
          margin-top: 10px;
        }
      }
    }
  }
`;
