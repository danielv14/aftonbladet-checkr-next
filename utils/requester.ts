import fetch from 'isomorphic-unfetch';
import { Checker } from '../interfaces/Checker';
import { dtoCheckerToChecker } from './dtoCheckers';

export const getAllCheckers = async (origin: string): Promise<Checker[]> => {
  const res = await fetch(`${origin}/api/get-checkers`);
  const { checkers } = await res.json();
  return checkers.map(dtoCheckerToChecker) as Checker[];
};

export const getCurrentAmountOfCheckers = async (origin: string): Promise<number> => {
  const currentCheckersRes = await fetch(`${origin}/api/current-checkers`);
  const { current } = await currentCheckersRes.json();
  return current as number;
};
