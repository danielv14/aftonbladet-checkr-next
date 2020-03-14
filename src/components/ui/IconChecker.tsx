import * as React from 'react';
import { theme } from './theme';
import styled from 'styled-components';

const Checker = styled.span`
  color: ${props => props.color};
`;

export const IconChecker: React.FC = () => {
  return <Checker color={theme.colors.brand}>&#10004;</Checker>;
};

IconChecker.displayName = 'IconChecker';
