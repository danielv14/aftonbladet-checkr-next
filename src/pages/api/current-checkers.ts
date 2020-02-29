import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeForCurrentCheckers, SCRAPING_URL } from '../../lib/scraping/scraper';

interface CurrentCheckersResponse {
  current: number;
}

export default async (_req: NextApiRequest, res: NextApiResponse<CurrentCheckersResponse>) => {
  try {
    const data = await scrapeForCurrentCheckers();
    res.status(200).json({ current: data });
  } catch (error) {
    console.log(`Error when scraping ${SCRAPING_URL}`, error);
    res.status(500).json({ current: 0 });
  }
};
