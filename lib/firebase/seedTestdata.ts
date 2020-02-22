import { Checker, FirebaseChecker } from '../../interfaces/Checker';
import { checkersTestData } from '../../utils/testData/checkersTestData';
import { addEntryToDB } from './functions';

const randomSeedChecker = (seed: FirebaseChecker[]) => seed[Math.floor(Math.random() * seed.length)];

export const seedDBWithTestdata = async (fullSeed = false) => {
  let seedData = ([randomSeedChecker(checkersTestData), randomSeedChecker(checkersTestData)] as unknown) as Checker[];
  if (fullSeed) {
    seedData = checkersTestData as Checker[];
  }
  const promises = seedData.map(addEntryToDB);
  return Promise.all(promises);
};
