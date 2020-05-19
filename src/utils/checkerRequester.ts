import { Checker, CheckerDto } from '../interfaces/Checker';
import { fromCheckerDto } from './mappings/checker';
import { fetcher } from './fetcher';

interface CheckerResponse {
  checkers: CheckerDto[];
}

export const getAllCheckers = async (origin: string): Promise<Checker[]> => {
  const { checkers } = await fetcher<CheckerResponse>(`${origin}/api/get-checkers`);
  return checkers.map(fromCheckerDto) as Checker[];
};

export const getCurrentAmountOfCheckers = async (origin: string): Promise<number> => {
  const { current } = await fetcher<{ current: number }>(`${origin}/api/current-checkers`);
  return current;
};
