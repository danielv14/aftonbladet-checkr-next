import * as Nivo from '@nivo/line';
import * as React from 'react';
import { Checker, CheckerFields } from '../../interfaces/Checker';
import { sortCheckersByCreatedAsc } from '../../utils/sortCheckers';

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

const transformCheckerData = (checkers: Checker[]) => {
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
  const commonProperties = {
    data: transformCheckerData(sortedCheckers),
    schema: 'nivo',
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    axisTop: null,
    axisRight: null,
    pointSize: 10,
    useMesh: true,
  };
  return (
    <Nivo.ResponsiveLine
      {...commonProperties}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      colors={{ scheme: 'nivo' }}
      pointBorderColor={{ from: 'serieColor' }}
    />
  );
};

ResponsiveLine.displayName = 'ResponsiveLine';
