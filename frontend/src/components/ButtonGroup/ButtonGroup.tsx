import React, { ButtonHTMLAttributes } from 'react';

import { Button, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Props;

interface Props {
  first: string;
  second: string;
};

const ButtonGroup: React.FC<ButtonProps> = ({ first, second, ...rest }: ButtonProps) => (
  <Container>
    <Button {...rest} >
      { first }
    </Button>
    <Button {...rest} >
      { second }
    </Button>
  </Container>
);

export default ButtonGroup;
