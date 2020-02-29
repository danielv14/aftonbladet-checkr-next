import { compareAsc, compareDesc } from 'date-fns';
import { Checker, CheckerFields, CheckerByYear, isChecker, isCheckerByYear } from '../interfaces/Checker';

type CheckerToSort = Checker | CheckerByYear;

const now = new Date();

const dateField = (checker: Checker | CheckerByYear) => {
  if (isChecker(checker)) {
    return new Date(checker[CheckerFields.created]);
  }
  if (isCheckerByYear(checker)) {
    return new Date(checker[CheckerFields.year]);
  }
  return now;
};

export const sortCheckersByCreatedAsc = (checkerLeft: CheckerToSort, checkerRight: CheckerToSort) =>
  compareAsc(dateField(checkerLeft), dateField(checkerRight));

export const sortCheckersByCreatedDesc = (checkerLeft: CheckerToSort, checkerRight: CheckerToSort) =>
  compareDesc(dateField(checkerLeft), dateField(checkerRight));
