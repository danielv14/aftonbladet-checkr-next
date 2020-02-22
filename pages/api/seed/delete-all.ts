import { NextApiRequest, NextApiResponse } from 'next';
import { deleteAllEntriesFromDB } from '../../../lib/firebase/functions';
import { validFirebaseApiKey } from '../../../utils/validApiKey';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (validFirebaseApiKey(req.query.apiKey)) {
    try {
      await deleteAllEntriesFromDB();
      res.status(200).json({ status: 200, message: 'All db entries has been successfully deleted' });
    } catch (error) {
      console.log('Error when deleting db entries', error);
      res.status(500).json({ status: 500, message: error });
    }
  } else {
    res.status(404).json({ status: 401 });
  }
};
