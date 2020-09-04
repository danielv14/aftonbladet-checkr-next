import { Checker, CheckerFields } from '../../interfaces/Checker';
import { CheckerCalendarItem } from '../../interfaces/CheckerCalendar';

export const transformCheckersToCalendarFormat = (checkers: Checker[]): CheckerCalendarItem[] => {
  return checkers.map(checker => {
    return { day: checker[CheckerFields.created], value: checker[CheckerFields.amount] };
  });
};
