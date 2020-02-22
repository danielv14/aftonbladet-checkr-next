import fetch from 'isomorphic-unfetch';
import { getAmountOfCheckers } from './findCheckers';

export const SCRAPING_URL = 'https://www.aftonbladet.se/';

export const scrapeForCurrentCheckers = async () => {
  const res = await fetch(SCRAPING_URL);
  const data = await res.text();
  const amountOfCheckers = getAmountOfCheckers(data);
  return amountOfCheckers;
};
