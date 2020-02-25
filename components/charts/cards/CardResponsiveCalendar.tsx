import * as React from 'react';
import { Card, CardProps } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveCalendarProps, ResponsiveCalendar } from '../ResponsiveCalendar';

interface CardResponsiveCalendarProps extends ResponsiveCalendarProps, CardProps {
  header: string;
}

export const CardResponsiveCalendar: React.FC<CardResponsiveCalendarProps> = ({ header, height, ...rest }) => {
  return (
    <>
      <Card header={header} height={height}>
        <ResponsiveCalendar {...rest} />
        <MarginLarge />
      </Card>
    </>
  );
};

CardResponsiveCalendar.displayName = 'CardResponsiveCalendar';
