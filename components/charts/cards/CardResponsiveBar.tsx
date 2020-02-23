import * as React from 'react';
import { Card } from '../../ui/Card';
import { MarginLarge } from '../../ui/margins/MarginLarge';
import { ResponsiveBar, ResponsiveBarProps } from '../ResponsiveBar';

interface CardResponsiveBarProps extends ResponsiveBarProps {
  header: string;
}

export const CardResponsiveBar: React.FC<CardResponsiveBarProps> = ({ header, ...rest }) => {
  return (
    <>
      <Card>
        <div>
          <h2>{header}</h2>
          <ResponsiveBar {...rest} />
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
