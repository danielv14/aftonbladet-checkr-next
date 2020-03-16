import { Weekday } from './Weekdays';

export interface FirebaseChecker {
  amount: number;
  created: string;
}

export interface CheckerDTO extends FirebaseChecker {
  id: string;
}

export enum CheckerFields {
  created = 'Datum',
  amount = 'Antal',
  day = 'Dag',
  year = 'År',
}

interface CheckerBase {
  [CheckerFields.amount]: number;
}

export interface Checker extends CheckerBase {
  [CheckerFields.created]: string;
}

export interface CheckerByWeekDay extends CheckerBase {
  [CheckerFields.day]: Weekday;
}

export interface CheckerByYear extends CheckerBase {
  [CheckerFields.year]: string;
}

export interface CheckersByQuarter {
  id: string;
  label: string;
  value: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isChecker = (object: any): object is Checker => CheckerFields.created in object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCheckerByYear = (object: any): object is CheckerByYear => CheckerFields.year in object;
