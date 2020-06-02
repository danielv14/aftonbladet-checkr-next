import { Weekday, WeekdayNumber } from '../../interfaces/Weekdays';

export const fromWeekdayNumber = (index: WeekdayNumber) => {
  let weekDay = Weekday.monday;
  switch (index) {
    case WeekdayNumber.Tuesday:
      weekDay = Weekday.tuesday;
      break;
    case WeekdayNumber.Wednesday:
      weekDay = Weekday.wednesday;
      break;
    case WeekdayNumber.Thursday:
      weekDay = Weekday.thursday;
      break;
    case WeekdayNumber.Friday:
      weekDay = Weekday.friday;
      break;
    case WeekdayNumber.Saturday:
      weekDay = Weekday.saturday;
      break;
    case WeekdayNumber.Sunday:
      weekDay = Weekday.sunday;
      break;
  }
  return weekDay;
};
