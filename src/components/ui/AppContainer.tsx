import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../ui/theme';

const Container = styled.div`
  max-width: ${props => props.width};
  width: 100%;
  margin: 0 auto;
`;

export const AppContainer: React.FC = ({ children }) => {
  return <Container width={theme.applicaton.maxWidth}>{children}</Container>;
};
