import * as React from 'react';
import { Card } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveLine, ResponsiveLineProps } from '../ResponsiveLine';

interface CardResponsiveLineProps extends ResponsiveLineProps {
  header: string;
}

export const CardResponsiveLine: React.FC<CardResponsiveLineProps> = ({ header, ...rest }) => {
  return (
    <>
      <Card>
        <div>
          <h2>{header}</h2>
          <ResponsiveLine {...rest} />
        </div>
        <MarginLarge />
      </Card>
      <style jsx>
        {`
          div {
            height: 400px;
          }
          h2 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

CardResponsiveLine.displayName = 'CardResponsiveLine';
