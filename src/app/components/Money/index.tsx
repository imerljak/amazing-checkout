import React from 'react';

// import { Container } from './styles';

interface MoneyProps {
  sign?: string;
  value: number;
}

const Money: React.FC<MoneyProps> = ({ sign = '£', value }) => {
  return (
    <span>
      {sign}
      {(value / 100).toFixed(2)}
    </span>
  );
};

export default Money;
