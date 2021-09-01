import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo-colored.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="Mercos" />
      <nav>
        <Link to="/">
          Dashboard
          <div
            className="bar"
            style={{
              background:
                window.location.pathname === '/import' ? '' : '#663991',
            }}
          />
        </Link>
        <Link to="/import">
          Importar
          <div
            className="bar"
            style={{
              background:
                window.location.pathname === '/import' ?  '#663991' : '',
            }}
          />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
