import { compareAsc, compareDesc } from 'date-fns';
import { Checker, CheckerFields, CheckerByYear, isChecker, isCheckerByYear } from '../interfaces/Checker';

type CheckerToSort = Checker | CheckerByYear;

const dateField = (checker: Checker | CheckerByYear) => {
  return isChecker(checker)
    ? new Date(checker[CheckerFields.created])
    : isCheckerByYear(checker)
    ? new Date(checker[CheckerFields.year])
    : new Date();
};

export const sortCheckersByCreatedAsc = (checkerLeft: CheckerToSort, checkerRight: CheckerToSort) =>
  compareAsc(dateField(checkerLeft), dateField(checkerRight));

export const sortCheckersByCreatedDesc = (checkerLeft: CheckerToSort, checkerRight: CheckerToSort) =>
  compareDesc(dateField(checkerLeft), dateField(checkerRight));
