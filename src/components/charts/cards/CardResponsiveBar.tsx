import * as React from 'react';
import { Card, CardProps } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveBar, ResponsiveBarProps } from '../ResponsiveBar';

interface CardResponsiveBarProps extends ResponsiveBarProps, CardProps {}

export const CardResponsiveBar: React.FC<CardResponsiveBarProps> = ({ header, height, ...rest }) => {
  return (
    <>
      <Card header={header} height={height}>
        <ResponsiveBar {...rest} />
        <MarginLarge />
      </Card>
    </>
  );
};

CardResponsiveBar.displayName = 'CardResponsiveBar';
