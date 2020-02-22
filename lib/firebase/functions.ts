import { checkersCollection } from './db';
import { toFireStoreDocData } from './utils';
import { Checker, FirebaseChecker } from '../../interfaces/Checker';

export const getAllEntries = async () => {
  try {
    const querySnapshot = await checkersCollection.get();
    const checkers = querySnapshot.docs.map(toFireStoreDocData);
    return checkers;
  } catch (err) {
    console.log('Error getting documents', err);
    return [] as Checker[];
  }
};

export const addEntryToDB = (entry: FirebaseChecker) => checkersCollection.add(entry);
