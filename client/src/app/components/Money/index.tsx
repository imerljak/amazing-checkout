import React from 'react';
import { Container } from './styles';

interface MoneyProps {
  sign?: string;
  value: number;
}

const Money: React.FC<MoneyProps> = ({ sign = '£', value }) => {
  return (
    <Container>
      {sign}
      {(value / 100).toFixed(2)}
    </Container>
  );
};

export default Money;
