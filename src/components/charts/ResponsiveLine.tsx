import * as Nivo from '@nivo/line';
import * as React from 'react';
import { Checker, CheckerFields } from '../../interfaces/Checker';
import { sortCheckersByCreatedAsc } from '../../utils/sortCheckers';
import { commonPropertiesLineComponent } from '../../settings/chart/commonProperties';
import { useTheme } from '../../hooks/useTheme';
import { transformCheckersToLineData } from '../../utils/mappings/lineData';
import { getHighestValueInArray } from '../../utils/getHighestValueinArray';
import { lineChartYAxisOffset } from '../../settings/chart/settings';

export interface ResponsiveLineProps {
  checkers: Checker[];
  keys: CheckerFields[];
  indexBy: CheckerFields;
}

export const ResponsiveLine: React.FC<ResponsiveLineProps> = ({ checkers }) => {
  const lineData = transformCheckersToLineData(checkers.sort(sortCheckersByCreatedAsc));
  const highestValue = getHighestValueInArray(lineData.data.map(entry => entry.y));

  const { colors } = useTheme();
  return (
    <Nivo.ResponsiveLine
      {...commonPropertiesLineComponent}
      data={[lineData]}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: highestValue + lineChartYAxisOffset, stacked: true, reverse: false }}
      colors={colors.brand}
      pointBorderColor={{ from: 'serieColor' }}
    />
  );
};

ResponsiveLine.displayName = 'ResponsiveLine';
