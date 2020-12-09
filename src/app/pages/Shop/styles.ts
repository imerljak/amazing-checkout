import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  height: 90%;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-rows: 4fr 1fr;
  grid-gap: 1rem;
  max-width: 800px;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

interface SpacerProps {
  height?: number;
}

export const Spacer = styled.div<SpacerProps>`
  height: ${props => (props.height ? `${props.height}px` : '20px')};
`;
