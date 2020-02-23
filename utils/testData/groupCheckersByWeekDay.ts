import { Checker, CheckerFields, CheckerByWeekDay } from '../../interfaces/Checker';
import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns';
import { Weekday } from '../../interfaces/Weekdays';

export const groupCheckersByWeekDay = (checkers: Checker[]): CheckerByWeekDay[] => {
  let countMonday = 0;
  let countTuesday = 0;
  let countWednesday = 0;
  let countThursday = 0;
  let countFriday = 0;
  let countSaturday = 0;
  let countSunday = 0;

  checkers.forEach(checker => {
    const date = new Date(checker[CheckerFields.created]);
    isMonday(date)
      ? (countMonday += checker[CheckerFields.amount])
      : isTuesday(date)
      ? (countTuesday += checker[CheckerFields.amount])
      : isWednesday(date)
      ? (countWednesday += checker[CheckerFields.amount])
      : isThursday(date)
      ? (countThursday += checker[CheckerFields.amount])
      : isFriday(date)
      ? (countFriday += checker[CheckerFields.amount])
      : isSaturday(date)
      ? (countSaturday += checker[CheckerFields.amount])
      : isSunday(date)
      ? (countSunday += checker[CheckerFields.amount])
      : undefined;
  });
  return [
    {
      [CheckerFields.day]: Weekday.monday,
      [CheckerFields.amount]: countMonday,
    },
    {
      [CheckerFields.day]: Weekday.tuesday,
      [CheckerFields.amount]: countTuesday,
    },
    {
      [CheckerFields.day]: Weekday.wednesday,
      [CheckerFields.amount]: countWednesday,
    },
    {
      [CheckerFields.day]: Weekday.thursday,
      [CheckerFields.amount]: countThursday,
    },
    {
      [CheckerFields.day]: Weekday.friday,
      [CheckerFields.amount]: countFriday,
    },
    {
      [CheckerFields.day]: Weekday.saturday,
      [CheckerFields.amount]: countSaturday,
    },
    {
      [CheckerFields.day]: Weekday.sunday,
      [CheckerFields.amount]: countSunday,
    },
  ];
};
