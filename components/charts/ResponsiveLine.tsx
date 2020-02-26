import * as Nivo from '@nivo/line';
import * as React from 'react';
import { Checker, CheckerFields } from '../../interfaces/Checker';
import { sortCheckersByCreatedAsc } from '../../utils/sortCheckers';
import { commonPropertiesLineComponent } from './commonProperties';
import { theme } from '../ui/theme';

const lineColor = 'hsl(192, 70%, 50%)';

interface CheckerCords {
  x: string;
  y: number;
}

interface LineData {
  id: string;
  color: string;
  data: CheckerCords[];
}

const transformCheckerDataToLineData = (checkers: Checker[]) => {
  const data = [
    {
      id: 'Checkers',
      color: lineColor,
      data: checkers.map(checker => {
        return {
          x: checker[CheckerFields.created],
          y: checker[CheckerFields.amount],
        };
      }),
    },
  ];
  return data as LineData[];
};

export interface ResponsiveLineProps {
  checkers: Checker[];
  keys: CheckerFields[];
  indexBy: CheckerFields;
}

export const ResponsiveLine: React.FC<ResponsiveLineProps> = ({ checkers }) => {
  const sortedCheckers = checkers.sort(sortCheckersByCreatedAsc);
  const data = transformCheckerDataToLineData(sortedCheckers);
  return (
    <Nivo.ResponsiveLine
      {...commonPropertiesLineComponent}
      data={data}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      colors={theme.colors.brand}
      pointBorderColor={{ from: 'serieColor' }}
    />
  );
};

ResponsiveLine.displayName = 'ResponsiveLine';
