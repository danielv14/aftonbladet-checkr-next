import { NextApiRequest, NextApiResponse } from 'next';
import { validFirebaseApiKey } from '../../../utils/validApiKey';
import { scrapeForCurrentCheckers } from '../../../lib/scraping/scraper';
import { getCurrentDate } from '../../../utils/getCurrentDate';
import { addEntryToDB, getLatestEntry } from '../../../lib/firebase/functions';
import { FirebaseChecker } from '../../../interfaces/Checker';
import { isToday } from '../../../utils/isToday';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (validFirebaseApiKey(req.query.apiKey)) {
    try {
      const currentEntryForToday = await getLatestEntry();
      if (currentEntryForToday && isToday(new Date(currentEntryForToday.created))) {
        res.status(200).json({ status: 200, message: `Todays checkers has already been added into db` });
        return;
      }

      const currentCheckers = await scrapeForCurrentCheckers();
      const checkerObj = {
        amount: currentCheckers,
        created: getCurrentDate(),
      } as FirebaseChecker;
      await addEntryToDB(checkerObj);
      res.status(200).json({ status: 200, message: `Today's checkers has been added into db` });
    } catch (error) {
      console.log(`Error when adding today's amount of checkers`, error);
      res.status(500).json({ status: 500, message: error });
    }
  } else {
    res.status(404).json({ status: 401 });
  }
};
