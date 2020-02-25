import * as React from 'react';
import { Card } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveCalendarProps, ResponsiveCalendar } from '../ResponsiveCalendar';

interface CardResponsiveCalendarProps extends ResponsiveCalendarProps {
  header: string;
  cardHeight?: number;
}

export const CardResponsiveCalendar: React.FC<CardResponsiveCalendarProps> = ({
  header,
  cardHeight = 400,
  ...rest
}) => {
  return (
    <>
      <Card>
        <div>
          <h2>{header}</h2>
          <ResponsiveCalendar {...rest} />
        </div>
        <MarginLarge />
      </Card>
      <style jsx>
        {`
          div {
            height: ${cardHeight}px;
            display: block;
          }
          h2 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

CardResponsiveCalendar.displayName = 'CardResponsiveCalendar';
