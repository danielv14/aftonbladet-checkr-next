import { getTargetAmount } from './scrapeTargetAmount';
import { fetchAftonbladetText } from './scrapeRequester';
import { SCRAPING_TARGET } from './config';

export const scrapeForCurrentCheckers = async () => {
  const htmlString = await fetchAftonbladetText();
  const amountOfCheckers = getTargetAmount(htmlString, SCRAPING_TARGET);
  return amountOfCheckers;
};
