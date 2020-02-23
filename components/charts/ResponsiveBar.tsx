import * as Nivo from '@nivo/bar';
import * as React from 'react';
import { Checker, CheckerFields, CheckerByWeekDay } from '../../interfaces/Checker';

type BarLayout = 'vertical' | 'horizontal';

export interface ResponsiveBarProps {
  checkers: Checker[] | CheckerByWeekDay[];
  layout?: BarLayout;
  keys: CheckerFields[];
  indexBy: CheckerFields;
}

export const ResponsiveBar: React.FC<ResponsiveBarProps> = ({ checkers, layout = 'vertical', keys, indexBy }) => {
  const commonProperties = {
    data: checkers,
    layout,
    keys,
    indexBy,
    schema: 'nivo',
    animate: true,
    padding: 0.3,
    margin: {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    },
  };
  return <Nivo.ResponsiveBar {...commonProperties} />;
};

ResponsiveBar.displayName = 'ResponsiveBar';
