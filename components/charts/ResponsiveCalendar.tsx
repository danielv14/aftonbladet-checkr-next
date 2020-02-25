import * as Nivo from '@nivo/calendar';
import * as React from 'react';
import { Checker, CheckerFields } from '../../interfaces/Checker';

export interface ResponsiveCalendarProps {
  checkers: Checker[];
}

interface CalanderChecker {
  day: string;
  value: number;
}

const transformCheckersToCalendarFormat = (checkers: Checker[]): CalanderChecker[] => {
  return checkers.map(checker => {
    return { day: checker[CheckerFields.created], value: checker[CheckerFields.amount] };
  });
};

export const ResponsiveCalendar: React.FC<ResponsiveCalendarProps> = ({ checkers }) => {
  const transformedCheckers = transformCheckersToCalendarFormat(checkers);

  const dateTo = transformedCheckers[0].day;
  const dateFrom = transformedCheckers[transformedCheckers.length - 1].day;

  return (
    <Nivo.ResponsiveCalendar
      data={transformedCheckers}
      from={dateFrom}
      to={dateTo}
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
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
          itemHeight: 66,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  );
};

ResponsiveCalendar.displayName = 'ResponsiveCalendar';
