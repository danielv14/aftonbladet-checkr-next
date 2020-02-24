import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEntries } from '../../lib/firebase/actions';
import { CheckerDTO } from '../../interfaces/Checker';
import { testDataAsCheckerDTO } from '../../utils/testData/checkersTestData';
import { Environment } from '../../interfaces/Environment';

interface GetCheckersResponse {
  checkers: CheckerDTO[];
}

export default async (_req: NextApiRequest, res: NextApiResponse<GetCheckersResponse>) => {
  const data = process.env.NODE_ENV === Environment.Development ? await testDataAsCheckerDTO() : await getAllEntries();
  res.status(200).json({ checkers: data });
};
