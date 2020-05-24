import { NextApiRequest, NextApiResponse } from 'next';
import { seedDbWithTestdata } from '../../../lib/firebase/seedTestdata';
import { withAuthorization } from '../../../middlewares/authorizationMiddleware';

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const fullSeed = req.query.fullSeed === 'true';
    await seedDbWithTestdata(fullSeed);
    res.status(200).json({ status: 200, message: 'Firebase db has been successfully seeded' });
  } catch (error) {
    console.log('Error when seeding db', error);
    res.status(500).json({ status: 500, message: error });
  }
};

export default withAuthorization(requestHandler);
