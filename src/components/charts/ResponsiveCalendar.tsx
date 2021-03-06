import * as Nivo from '@nivo/calendar';
import * as React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Checker } from '../../interfaces/Checker';
import { transformCheckersToCalendarFormat } from '../../utils/mappings/checkerCalendar';

export interface ResponsiveCalendarProps {
  checkers: Checker[];
}

export const ResponsiveCalendar: React.FC<ResponsiveCalendarProps> = ({ checkers }) => {
  const transformedCheckers = transformCheckersToCalendarFormat(checkers);
  const dateTo = transformedCheckers[0].day;
  const dateFrom = transformedCheckers[transformedCheckers.length - 1].day;
  const { colors } = useTheme();
  return (
    <Nivo.ResponsiveCalendar
      data={transformedCheckers}
      from={dateFrom}
      to={dateTo}
      emptyColor="#eeeeee"
      colors={['#97e3d5', '#61cdbb', '#e8c1a0', colors.brand]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  );
};

ResponsiveCalendar.displayName = 'ResponsiveCalendar';
