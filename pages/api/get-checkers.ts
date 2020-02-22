import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEntries } from '../../lib/firebase/functions';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const data = await getAllEntries();
  res.status(200).json(data);
};
