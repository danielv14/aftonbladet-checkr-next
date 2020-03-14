import * as React from 'react';
import { Header } from './Header';

interface AppHeaderProps {
  text: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ text }) => {
  return <Header>{text}</Header>;
};
