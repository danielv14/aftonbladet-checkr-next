import * as Nivo from '@nivo/line';
import * as React from 'react';
import { Checker, CheckerFields } from '../../interfaces/Checker';
import { sortCheckersByCreatedAsc } from '../../utils/sortCheckers';
import { commonPropertiesLineComponent } from '../../settings/chart/commonProperties';
import { useTheme } from '../../hooks/useTheme';
import { transformCheckersToLineData } from '../../utils/mappings/lineData';

export interface ResponsiveLineProps {
  checkers: Checker[];
  keys: CheckerFields[];
  indexBy: CheckerFields;
}

export const ResponsiveLine: React.FC<ResponsiveLineProps> = ({ checkers }) => {
  const data = transformCheckersToLineData(checkers.sort(sortCheckersByCreatedAsc));
  const { colors } = useTheme();
  return (
    <Nivo.ResponsiveLine
      {...commonPropertiesLineComponent}
      data={data}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
      colors={colors.brand}
      pointBorderColor={{ from: 'serieColor' }}
    />
  );
};

ResponsiveLine.displayName = 'ResponsiveLine';
