import { CheckerDto, Checker, CheckerFields } from '../interfaces/Checker';
import { getDateWithoutTime } from './getCurrentDate';

export const checkerDtoToChecker = (checker: CheckerDto): Checker => {
  return {
    [CheckerFields.created]: getDateWithoutTime(checker.created),
    [CheckerFields.amount]: checker.amount,
  };
};
