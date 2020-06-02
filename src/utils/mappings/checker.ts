import { Checker, CheckerDto, CheckerFields } from '../../interfaces/Checker';
import { getDateWithoutTime } from '../getCurrentDate';

export const fromCheckerDto = (checker: CheckerDto): Checker => {
  return {
    [CheckerFields.created]: getDateWithoutTime(checker.created),
    [CheckerFields.amount]: checker.amount,
  };
};
