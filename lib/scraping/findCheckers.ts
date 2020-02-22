import cheerio from 'cheerio';

const CHECKER_CLASS = '.abSymbBo';

export const getAmountOfCheckers = (html: string) => {
  try {
    const $ = cheerio.load(html);
    const checkers = $(CHECKER_CLASS).toArray();
    return checkers.length || 0;
  } catch (e) {
    console.log('Could not parse html to find checkers', e);
    return 0;
  }
};
