import { NextApiRequest, NextApiResponse } from 'next';
import { seedDBWithTestdata } from '../../../lib/firebase/seedTestdata';
import { validFirebaseApiKey } from '../../../utils/validApiKey';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (validFirebaseApiKey(req.query.apiKey)) {
    try {
      const fullSeed = req.query.fullSeed === 'true';
      await seedDBWithTestdata(fullSeed);
      res.status(200).json({ status: 200, message: 'Firebase db has been successfully seeded' });
    } catch (error) {
      console.log('Error when seeding db', error);
      res.status(500).json({ status: 500, message: error });
    }
  } else {
    res.status(404).json({ status: 404 });
  }
};
