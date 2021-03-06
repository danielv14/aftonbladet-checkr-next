import * as firebase from 'firebase';
import { db } from './db';
import { FirebaseChecker } from '../../interfaces/Checker';
import { checkersTestData } from '../../utils/testData/checkersTestData';

export const getFixedSizeOfSeeds = (size: number): FirebaseChecker[] => new Array(size).fill(pluckRandomSeed);

const pluckRandomSeed = () => checkersTestData[Math.floor(Math.random() * checkersTestData.length)];

export const deleteQueryBatch = async (
  query: firebase.firestore.Query<firebase.firestore.DocumentData>,
  resolve: (value?: unknown) => void,
  reject: (value?: unknown) => void,
) => {
  try {
    const snapshot = await query.get();
    if (snapshot.size == 0) {
      resolve();
      return;
    }
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    if (snapshot.size == 0) {
      resolve();
      return;
    }
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(query, resolve, reject);
    });
  } catch (error) {
    console.log('Failed to batch delete entries', error);
    reject();
  }
};
