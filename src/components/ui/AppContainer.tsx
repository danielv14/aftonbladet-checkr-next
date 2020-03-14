import * as React from 'react';
import styled from 'styled-components';
import { StyledTheme } from '../../settings/theming/theme';

const Container = styled.div(
  ({ theme }: StyledTheme) => `
    max-width: ${theme.application.maxWidth};
    width: 100%;
    margin: 0 auto;
  `,
);

export const AppContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
