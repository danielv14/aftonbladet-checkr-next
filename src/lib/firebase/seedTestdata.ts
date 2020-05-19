import { CheckerDto, FirebaseChecker } from '../../interfaces/Checker';
import { checkersTestData } from '../../utils/testData/checkersTestData';
import { addCheckerToDb } from './actions';

const randomSeedChecker = (seed: FirebaseChecker[]) => seed[Math.floor(Math.random() * seed.length)];

export const seedDBWithTestdata = async (fullSeed = false) => {
  let seedData = ([
    randomSeedChecker(checkersTestData),
    randomSeedChecker(checkersTestData),
  ] as unknown) as CheckerDto[];
  if (fullSeed) {
    seedData = checkersTestData as CheckerDto[];
  }
  const promises = seedData.map(addCheckerToDb);
  return Promise.all(promises);
};
