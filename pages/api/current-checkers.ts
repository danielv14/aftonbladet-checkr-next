import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeForCurrentCheckers, SCRAPING_URL } from '../../lib/scraping/scraper';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await scrapeForCurrentCheckers();
    res.status(200).json(data);
  } catch (error) {
    console.log(`Error when scraping ${SCRAPING_URL}`, error);
    res.status(500).json({ error });
  }
};
