import { NextApiRequest, NextApiResponse } from 'next';
import { validFirebaseApiKey } from '../utils/validApiKey';

export const withAuthorization = (handler: Function) => (req: NextApiRequest, res: NextApiResponse) => {
  if (!validFirebaseApiKey(req.query.apiKey)) {
    return res.status(403).json({ message: 'This route requiers authorization' });
  }
  return handler(req, res);
};
