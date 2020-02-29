import { Checker, CheckerFields, CheckerByYear } from '../interfaces/Checker';
import { getYear } from 'date-fns';

export const groupCheckersByYear = (checkers: Checker[]): CheckerByYear[] => {
  const years = getYearSpan(checkers);
  const data = years.map(year => {
    const checkersByYear = checkers.filter(checker => filterCheckersByYear(checker, year));
    const checkersAmount = checkersByYear.map(getCheckerAmounts);
    const amount = checkersAmount.reduce((sum, x) => sum + x);
    return {
      [CheckerFields.year]: `${year}`,
      [CheckerFields.amount]: amount,
    } as CheckerByYear;
  });
  return data;
};

const filterCheckersByYear = (checker: Checker, year: number) => {
  const checkerYear = getYear(new Date(checker[CheckerFields.created]));
  return checkerYear === year;
};

const getCheckerAmounts = (checker: Checker) => checker[CheckerFields.amount];

const getYearSpan = (checkers: Checker[]) => {
  const years = checkers.map(getCheckerYear);
  const uniqueYears = [...new Set(years)];
  return uniqueYears;
};

const getCheckerYear = (checker: Checker) => getYear(new Date(checker[CheckerFields.created]));
