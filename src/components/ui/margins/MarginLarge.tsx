import * as React from 'react';
import { useTheme } from '../../../hooks/useTheme';

export const MarginLarge = () => {
  const { margins } = useTheme();
  return <div style={{ margin: margins.large }}></div>;
};
