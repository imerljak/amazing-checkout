import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.3rem;
  align-self: stretch;

  margin-top: 0.5rem;
`;

export const ItemAmount = styled.div`
  font-weight: bold;
`;
export const ItemName = styled.div`
  font-weight: bold;
`;
export const ItemPrice = styled.div`
  justify-self: end;
`;
