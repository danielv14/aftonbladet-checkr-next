import { CheckerFields, CheckerWeekDay } from '../../interfaces/Checker';
import { fromWeekdayNumber } from './weekDay';
import { WeekdayNumber } from '../../interfaces/Weekdays';

export const toCheckerWeekDay = (amount: number, index: number): CheckerWeekDay => ({
  [CheckerFields.day]: fromWeekdayNumber(index as WeekdayNumber),
  [CheckerFields.amount]: amount,
});
