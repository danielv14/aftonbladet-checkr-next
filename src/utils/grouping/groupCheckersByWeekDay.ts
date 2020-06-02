import { Checker, CheckerFields, CheckerWeekDay } from '../../interfaces/Checker';
import * as weekDayNumberMappings from '../mappings/weekDayNumber';
import { toCheckerWeekDay } from '../mappings/checkerWeekDay';

const sumCheckersByWeekDayIndex = (checkers: Checker[]): number[] => {
  return checkers.reduce(
    (weekDayIndex, currentChecker) => {
      const date = new Date(currentChecker[CheckerFields.created]);
      weekDayIndex[weekDayNumberMappings.fromDate(date)] += currentChecker[CheckerFields.amount];
      return weekDayIndex;
    },
    // [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    [0, 0, 0, 0, 0, 0, 0] as number[],
  );
};

export const groupCheckersByWeekDay = (checkers: Checker[]): CheckerWeekDay[] => {
  const checkersAmountByWeekDayIndex = sumCheckersByWeekDayIndex(checkers);
  const checkersByWeekDay: CheckerWeekDay[] = checkersAmountByWeekDayIndex.map(toCheckerWeekDay);
  return checkersByWeekDay;
};
