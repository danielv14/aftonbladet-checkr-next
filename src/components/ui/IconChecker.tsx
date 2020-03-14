import * as React from 'react';
import styled from 'styled-components';
import { StyledTheme } from '../../settings/theming/theme';

const Checker = styled.span(
  ({ theme }: StyledTheme) => `
    color: ${theme.colors.brand}  
  `,
);

export const IconChecker: React.FC = () => {
  return <Checker>&#10004;</Checker>;
};

IconChecker.displayName = 'IconChecker';
