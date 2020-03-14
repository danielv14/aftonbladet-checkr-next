import * as React from 'react';
import styled from 'styled-components';

const Checker = styled.span`
  color: ${({ theme }) => theme.colors.brand};
`;

export const IconChecker: React.FC = () => {
  return <Checker>&#10004;</Checker>;
};

IconChecker.displayName = 'IconChecker';
