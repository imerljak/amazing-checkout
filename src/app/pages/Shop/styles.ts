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
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'b c'
    'b c';
  grid-gap: 1rem;
  @media (max-width: 767px) {
    grid-template-areas:
      'b'
      'c';
  }

  & div:first-child: {
    grid-area: 'b';
  }

  & div:last-child: {
    grid-area: 'c';
  }
`;

interface SpacerProps {
  height?: number;
}

export const Spacer = styled.div<SpacerProps>`
  height: ${props => (props.height ? `${props.height}px` : '20px')};
`;
