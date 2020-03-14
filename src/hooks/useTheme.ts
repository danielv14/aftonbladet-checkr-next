import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
