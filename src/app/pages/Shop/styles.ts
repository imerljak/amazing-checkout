import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  height: 90%;
  @media (max-width: 767px) {
    padding: 1rem;
    height: 96%;
  }
`;

export const Content = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: 1rem;
  grid-template-areas: 'a b' 'a c';
  @media (max-width: 767px) {
    grid-template-rows: 1fr auto auto;
    grid-template-columns: 1fr;
    grid-template-areas: 'a' 'b' 'c';
  }

  & div:nth-child(1) {
    grid-area: a;
  }
  & div:nth-child(2) {
    grid-area: b;
  }
  & div:nth-child(3) {
    grid-area: c;
  }
`;

interface SpacerProps {
  height?: number;
}

export const Spacer = styled.div<SpacerProps>`
  height: ${props => (props.height ? `${props.height}px` : '20px')};
`;
