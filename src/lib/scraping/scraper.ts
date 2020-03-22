import fetch from 'isomorphic-unfetch';
import { getTargetAmount } from './scrapeTargetAmount';
import { CHECKER_CLASS } from './scrapeTarget';

export const SCRAPING_URL = 'https://www.aftonbladet.se/';

export const scrapeForCurrentCheckers = async () => {
  const res = await fetch(SCRAPING_URL);
  const data = await res.text();
  const amountOfCheckers = getTargetAmount(data, CHECKER_CLASS);
  return amountOfCheckers;
};
