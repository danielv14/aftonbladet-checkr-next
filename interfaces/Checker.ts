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
