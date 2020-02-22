import { checkersCollection } from './db';
import { toFireStoreDocData, deleteQueryBatch } from './utils';
import { Checker, FirebaseChecker } from '../../interfaces/Checker';

// Firestore can only perform batch operations or max 500 documents at once
const BATCH_LIMIT = 500;

export const getAllEntries = async () => {
  try {
    const querySnapshot = await checkersCollection.orderBy('created', 'desc').get();
    const checkers = querySnapshot.docs.map(toFireStoreDocData);
    return checkers;
  } catch (err) {
    console.log('Error getting documents', err);
    return [] as Checker[];
  }
};

export const getLatestEntry = async () => {
  const querySnapshot = await checkersCollection
    .orderBy('created', 'desc')
    .limit(1)
    .get();
  const checkers = querySnapshot.docs.map(toFireStoreDocData);
  return checkers[0];
};

export const addEntryToDB = (entry: FirebaseChecker) => checkersCollection.add(entry);

export const deleteAllEntriesFromDB = () => {
  const query = checkersCollection.orderBy('created').limit(BATCH_LIMIT);
  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve, reject);
  });
};
