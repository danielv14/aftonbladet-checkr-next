import * as React from 'react';
import { Card, CardProps } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveLine, ResponsiveLineProps } from '../ResponsiveLine';

interface CardResponsiveLineProps extends ResponsiveLineProps, CardProps {}

export const CardResponsiveLine: React.FC<CardResponsiveLineProps> = ({ header, height, ...rest }) => {
  return (
    <>
      <Card header={header} height={height}>
        <ResponsiveLine {...rest} />
        <MarginLarge />
      </Card>
    </>
  );
};

CardResponsiveLine.displayName = 'CardResponsiveLine';
