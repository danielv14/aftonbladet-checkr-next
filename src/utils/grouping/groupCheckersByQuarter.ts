import { Checker, CheckerFields, CheckersByQuarter } from '../../interfaces/Checker';
import { getQuarter } from 'date-fns';
import { getCheckersTotalAmount } from '../calculateAmount';
import { Quarter } from '../../interfaces/Quarter';

const quarterIds = ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Okt-Dec'];
const quarterLabels = ['Januari - Mars', 'April - Jun', 'Juli - September', 'Oktober - December'];

export const groupCheckersByQuarter = (checkers: Checker[]): CheckersByQuarter[] => {
  const quarters = [
    getCheckersTotalAmount(checkers.filter(filterByQuarterOne)),
    getCheckersTotalAmount(checkers.filter(filterByQuarterTwo)),
    getCheckersTotalAmount(checkers.filter(filterByQuarterThree)),
    getCheckersTotalAmount(checkers.filter(filterByQuarterFour)),
  ];
  const data = quarters.map((quarter, index) => {
    return { id: quarterIds[index], label: quarterLabels[index], value: quarter };
  });
  return data;
};

const filterByQuarterOne = (checker: Checker) => filterByQuarter(checker, Quarter.One);
const filterByQuarterTwo = (checker: Checker) => filterByQuarter(checker, Quarter.Two);
const filterByQuarterThree = (checker: Checker) => filterByQuarter(checker, Quarter.Three);
const filterByQuarterFour = (checker: Checker) => filterByQuarter(checker, Quarter.Four);

const filterByQuarter = (checker: Checker, quarter: Quarter) =>
  getQuarter(toDate(checker[CheckerFields.created])) === quarter;

const toDate = (dateString: string) => new Date(dateString);
