import styled from 'styled-components';

export const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  border-bottom: 1px solid #222;

  & p {
    margin: 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
