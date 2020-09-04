import { Checker, CheckerFields } from '../../interfaces/Checker';
import { LineData, CheckerCords } from '../../interfaces/LineData';
import { lineColor } from '../../settings/chart/chartColors';

const checkerToCords = (checker: Checker): CheckerCords => ({
  x: checker[CheckerFields.created],
  y: checker[CheckerFields.amount],
});

export const transformCheckersToLineData = (checkers: Checker[]) => {
  const data = [
    {
      id: 'Checkers',
      color: lineColor,
      data: checkers.map(checkerToCords),
    },
  ];
  return data as LineData[];
};
