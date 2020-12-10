import styled from 'styled-components';

export const CheckoutInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #222;
  padding: 0.4rem;
  margin-bottom: 1rem;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #444;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #444;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #444;
  }
`;

export const CardInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5rem;

  @media (max-width: 767px) {
    grid-gap: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const CheckoutConfirmButton = styled.button`
  border-radius: 0.2rem;
  border: 1px solid #222;
  padding: 0.4rem 1rem;
  background-color: #222;
  color: #eee;

  cursor: pointer;

  transition: background-color 0.1s ease-in;

  &:disabled {
    opacity: 0.5;

    &:active {
      background-color: #222;
    }
  }

  &:active {
    background-color: #333;
  }
`;
