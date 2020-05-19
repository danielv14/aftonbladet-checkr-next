import fetch from 'isomorphic-unfetch';
import { Checker, CheckerDto } from '../interfaces/Checker';
import { fromCheckerDto } from './mappings/checker';

const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getAllCheckers = async (origin: string): Promise<Checker[]> => {
  const { checkers } = await fetcher<{ checkers: CheckerDto[] }>(`${origin}/api/get-checkers`);
  return checkers.map(fromCheckerDto) as Checker[];
};

export const getCurrentAmountOfCheckers = async (origin: string): Promise<number> => {
  const { current } = await fetcher<{ current: number }>(`${origin}/api/current-checkers`);
  return current;
};
