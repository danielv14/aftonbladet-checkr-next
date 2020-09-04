import { Checker, CheckerFields } from '../../interfaces/Checker';
import { LineData, CheckerCords } from '../../interfaces/LineData';
import { lineColor } from '../../settings/chart/settings';

const checkerToCords = (checker: Checker): CheckerCords => ({
  x: checker[CheckerFields.created],
  y: checker[CheckerFields.amount],
});

export const transformCheckersToLineData = (checkers: Checker[]): LineData => ({
  id: 'Checkers',
  color: lineColor,
  data: checkers.map(checkerToCords),
});
