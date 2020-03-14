import styled from 'styled-components';
import { StyledTheme } from '../../settings/theming/theme';

export const Header = styled.h1(
  ({ theme }: StyledTheme) => `
  font-family: ${theme.typography.fontBrand};
  `,
);
