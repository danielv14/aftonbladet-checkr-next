import cheerio from 'cheerio';

export const getTargetAmount = (html: string, target: string): number => {
  try {
    return targetAmount(html, target);
  } catch (e) {
    console.log('Could not parse html to find targets', e);
    return 0;
  }
};

const targetAmount = (html: string, target: string) => {
  const $ = cheerio.load(html);
  const targets = $(target).toArray();
  return targets.length || 0;
};
