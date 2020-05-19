import { Checker, CheckerFields, CheckerYear } from '../../interfaces/Checker';
import { getYear } from 'date-fns';
import { getCheckersTotalAmount } from '../calculateAmount';

export const groupCheckersByYear = (checkers: Checker[]): CheckerYear[] => {
  const years = getYearSpan(checkers);
  const data = years.map(year => {
    const checkersByYear = checkers.filter(checker => filterCheckersByYear(checker, year));
    const amount = getCheckersTotalAmount(checkersByYear);
    return {
      [CheckerFields.year]: `${year}`,
      [CheckerFields.amount]: amount,
    } as CheckerYear;
  });
  return data;
};

const filterCheckersByYear = (checker: Checker, year: number) => {
  const checkerYear = getYear(new Date(checker[CheckerFields.created]));
  return checkerYear === year;
};

const getYearSpan = (checkers: Checker[]) => {
  const years = checkers.map(getCheckerYear);
  const uniqueYears = [...new Set(years)];
  return uniqueYears;
};

const getCheckerYear = (checker: Checker) => getYear(new Date(checker[CheckerFields.created]));
