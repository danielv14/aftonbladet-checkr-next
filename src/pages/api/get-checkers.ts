import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEntries } from '../../lib/firebase/actions';
import { CheckerDto } from '../../interfaces/Checker';
import { testDataAsCheckerDTO } from '../../utils/testData/checkersTestData';
import { isDevelopment } from '../../utils/isEnvironment';

interface GetCheckersResponse {
  checkers: CheckerDto[];
}

export default async (_req: NextApiRequest, res: NextApiResponse<GetCheckersResponse>) => {
  const data = isDevelopment ? await testDataAsCheckerDTO() : await getAllEntries();
  res.status(200).json({ checkers: data });
};
