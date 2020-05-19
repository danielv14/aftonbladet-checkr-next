import { checkersCollection } from './db';
import { deleteQueryBatch } from './utils';
import { CheckerDto, FirebaseChecker } from '../../interfaces/Checker';
import { fromFireStoreDocData } from '../../utils/mappings/checkerDto';

// Firestore can only perform batch operations or max 500 documents at once
const BATCH_LIMIT = 500;

export const getAllEntries = async () => {
  try {
    const querySnapshot = await checkersCollection.orderBy('created', 'desc').get();
    const checkers = querySnapshot.docs.map(fromFireStoreDocData);
    return checkers;
  } catch (err) {
    console.log('Error getting documents', err);
    return [] as CheckerDto[];
  }
};

export const getLatestEntry = async () => {
  const querySnapshot = await checkersCollection
    .orderBy('created', 'desc')
    .limit(1)
    .get();
  const checkers = querySnapshot.docs.map(fromFireStoreDocData);
  return checkers[0];
};

export const addEntryToDB = (entry: FirebaseChecker) => checkersCollection.add(entry);

export const deleteAllEntriesFromDB = () => {
  const query = checkersCollection.orderBy('created').limit(BATCH_LIMIT);
  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve, reject);
  });
};
