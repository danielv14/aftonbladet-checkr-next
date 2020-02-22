import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEntries } from '../../lib/firebase/functions';
import { Checker } from '../../interfaces/Checker';

interface GetCheckersResponse {
  checkers: Checker[];
}

export default async (_req: NextApiRequest, res: NextApiResponse<GetCheckersResponse>) => {
  const data = await getAllEntries();
  res.status(200).json({ checkers: data });
};
