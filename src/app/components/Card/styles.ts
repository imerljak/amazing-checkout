import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: 0.5rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
`;
export const CardHeader = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const CardBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
`;
