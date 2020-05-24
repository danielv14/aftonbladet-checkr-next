import { getTargetAmount } from './scrapeTargetAmount';
import { scrapeForText } from './scrapeRequester';
import { SCRAPING_TARGET, SCRAPING_URL } from './config';

export const scrapeForCurrentCheckers = async () => {
  const htmlString = await scrapeForText(SCRAPING_URL);
  const amountOfCheckers = getTargetAmount(htmlString, SCRAPING_TARGET);
  return amountOfCheckers;
};
