import { getTargetAmount } from './scrapeTargetAmount';
import { CHECKER_CLASS } from './scrapeTarget';
import { fetchAftonbladetText } from './scrapeRequester';

export const scrapeForCurrentCheckers = async () => {
  const htmlString = await fetchAftonbladetText();
  const amountOfCheckers = getTargetAmount(htmlString, CHECKER_CLASS);
  return amountOfCheckers;
};
