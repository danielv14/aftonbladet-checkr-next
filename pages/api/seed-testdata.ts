import { NextApiRequest, NextApiResponse } from 'next';
import { seedDBWithTestdata } from '../../lib/firebase/seedTestdata';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.apiKey === process.env.FIREBASE_API_KEY) {
    try {
      const fullSeed = req.query.fullSeed === 'true';
      await seedDBWithTestdata(fullSeed);
      res.status(200).json({ status: 'ok', message: 'db has been successfully seeded' });
    } catch (error) {
      console.log('Error when seeding db', error);
      res.status(500).json({ status: 500, message: error });
    }
  } else {
    res.status(404).json({ status: 404 });
  }
};
