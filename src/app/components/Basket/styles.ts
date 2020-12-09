import styled from 'styled-components';

export const ItemsList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-flow: column;
  flex-grow: 1;
`;

export const CodeInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #222;
  margin-right: 0.5rem;
  padding: 0.4rem;
  flex-grow: 1;
`;
export const CodeSubmit = styled.button`
  border-radius: 0.2rem;
  border: 1px solid #222;
  padding: 0.4rem 1rem;
  background-color: #222;
  color: #eee;

  transition: background-color 0.1s ease-in;

  &:active {
    background-color: #333;
  }
`;
