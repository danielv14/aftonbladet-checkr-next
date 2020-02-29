import { CheckerDTO, Checker, CheckerFields } from '../interfaces/Checker';
import { getDateWithoutTime } from './getCurrentDate';

export const dtoCheckerToChecker = (checker: CheckerDTO): Checker => {
  return {
    [CheckerFields.created]: getDateWithoutTime(checker.created),
    [CheckerFields.amount]: checker.amount,
  };
};
