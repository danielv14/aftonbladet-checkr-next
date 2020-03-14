import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.applicaton.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

export const AppContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
