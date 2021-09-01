import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Props;

interface Props {
  kind?: 'icon' | 'text';
};

const Button: React.FC<ButtonProps> = ({ kind, children, ...rest }: ButtonProps) => (
  <ButtonStyle kind={kind} {...rest} >
    { children }
  </ButtonStyle>
);

export default Button;
