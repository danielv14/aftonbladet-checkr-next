import { checkersTestData } from '../../utils/testData/checkersTestData';
import { addCheckerToDb } from './actions';
import { getFixedSizeOfSeeds } from './utils';

export const seedDbWithTestdata = async (fullSeed = false) => {
  const seedData = fullSeed ? checkersTestData : getFixedSizeOfSeeds(2);
  const addToDbPromises = seedData.map(addCheckerToDb);
  return Promise.all(addToDbPromises);
};
