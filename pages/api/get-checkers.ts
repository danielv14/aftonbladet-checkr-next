import { NextApiRequest, NextApiResponse } from 'next';
import { checkersTestData } from '../../utils/testData/checkersTestData';
import { Checker } from '../../interfaces/Checker';

export default (_req: NextApiRequest, res: NextApiResponse<Checker[]>) => res.status(200).json(checkersTestData);
