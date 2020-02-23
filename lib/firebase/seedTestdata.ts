import { CheckerDTO, FirebaseChecker } from '../../interfaces/Checker';
import { checkersTestData } from '../../utils/testData/checkersTestData';
import { addEntryToDB } from './actions';

const randomSeedChecker = (seed: FirebaseChecker[]) => seed[Math.floor(Math.random() * seed.length)];

export const seedDBWithTestdata = async (fullSeed = false) => {
  let seedData = ([
    randomSeedChecker(checkersTestData),
    randomSeedChecker(checkersTestData),
  ] as unknown) as CheckerDTO[];
  if (fullSeed) {
    seedData = checkersTestData as CheckerDTO[];
  }
  const promises = seedData.map(addEntryToDB);
  return Promise.all(promises);
};
