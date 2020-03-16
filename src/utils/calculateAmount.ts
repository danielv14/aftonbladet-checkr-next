import { Checker, CheckerFields } from '../interfaces/Checker';

export const getCheckerAmounts = (checker: Checker) => checker[CheckerFields.amount];

export const getCheckersTotalAmount = (checkers: Checker[]) =>
  checkers.map(getCheckerAmounts).reduce((sum, x) => sum + x);
