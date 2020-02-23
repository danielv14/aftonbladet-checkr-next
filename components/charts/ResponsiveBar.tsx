import * as Nivo from '@nivo/bar';
import * as React from 'react';
import { Checker } from '../../interfaces/Checker';

type BarLayout = 'vertical' | 'horizontal';

export interface ResponsiveBarProps {
  checkers: Checker[];
  layout?: BarLayout;
}

export const ResponsiveBar: React.FC<ResponsiveBarProps> = ({ checkers, layout = 'vertical' }) => {
  const commonProperties = {
    data: checkers,
    layout,
    keys: ['amount'],
    indexBy: 'created',
    schema: 'nivo',
    animate: true,
    padding: 0.3,
    margin: {
      top: 50,
      right: 30,
      bottom: 50,
      left: 30,
    },
  };
  return <Nivo.ResponsiveBar {...commonProperties} />;
};

ResponsiveBar.displayName = 'ResponsiveBar';
