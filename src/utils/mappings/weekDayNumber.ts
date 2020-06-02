import { getDay } from 'date-fns';
import { WeekdayNumber, WeekdayNumberUS } from '../../interfaces/Weekdays';

export const fromDate = (date: Date): number => {
  const dayIndex = getWeekDayNumber(date);
  return (dayIndex as unknown) as number;
};

const getWeekDayNumber = (date: Date): WeekdayNumber => {
  const day: WeekdayNumberUS = getDay(date);
  let dayIndex = WeekdayNumber.Monday;
  switch (day) {
    case WeekdayNumberUS.Monday:
      dayIndex = WeekdayNumber.Monday;
      break;
    case WeekdayNumberUS.Tuesday:
      dayIndex = WeekdayNumber.Tuesday;
      break;
    case WeekdayNumberUS.Wednesday:
      dayIndex = WeekdayNumber.Wednesday;
      break;
    case WeekdayNumberUS.Thursday:
      dayIndex = WeekdayNumber.Thursday;
      break;
    case WeekdayNumberUS.Friday:
      dayIndex = WeekdayNumber.Friday;
      break;
    case WeekdayNumberUS.Saturday:
      dayIndex = WeekdayNumber.Saturday;
      break;
    case WeekdayNumberUS.Sunday:
      dayIndex = WeekdayNumber.Sunday;
      break;
  }
  return dayIndex;
};
