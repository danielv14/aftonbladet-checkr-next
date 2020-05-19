import { NextApiRequest, NextApiResponse } from 'next';
import { getLatestEntry } from '../lib/firebase/actions';
import { isToday } from 'date-fns';
import { CheckerDto } from '../interfaces/Checker';

const isTodaysCheckersLogged = (latestChecker: CheckerDto) => latestChecker && isToday(new Date(latestChecker.created));

export const withTodayAlreadyScraped = (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const latestChecker = await getLatestEntry();
    if (isTodaysCheckersLogged(latestChecker)) {
      return res.status(200).json({ message: `Today's checkers has already been added into db` });
    }
    return handler(req, res);
  } catch (error) {
    console.log(`Error when checking if todays amount of checkers has been added.`, error);
    res.status(500).json({ message: error });
  }
};
