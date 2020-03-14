import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../settings/theming/theme';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme as Theme;
};
