import * as React from 'react';
import { Card, CardProps } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsivePieProps, ResponsivePie } from '../ResponsivePie';

interface CardResponsivePieProps extends ResponsivePieProps, CardProps {}

export const CardResponsivePie: React.FC<CardResponsivePieProps> = ({ header, height, ...rest }) => {
  return (
    <>
      <Card header={header} height={height}>
        <ResponsivePie {...rest} />
        <MarginLarge />
      </Card>
    </>
  );
};

CardResponsivePie.displayName = 'CardResponsivePie';
